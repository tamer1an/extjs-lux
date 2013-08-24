Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        someValue : 0   // initialize to 0
    },
    constructor : function(config){
        this.initConfig(config);
    },
    localStorage : function(){
         // if (window["localStorage"]) { // your localStorage code here... }
        
        // local.storage.setItem("key1","value1");
        // local.storage.setItem("key1","value2");
        // var value = localstorage.getItem("key1");
        // localStorage["key1"]
        
        // for (var i = 0; i < localStorage.length; i++) {
        //     var key = localStorage.key(i);
        //     var value = localStorage[key];
        //     alert(value);
        // }
        
        // localStorage.clear();
        
        // If 5MB storage exceeds browser should throw QUOTA_EXCEEDED_ERR exception. http://html5test.com/      
    },
    requestAnimationFrame : function(){
        window.setTimeout(function() {
          // Animation code here.
        }, 17);
                
        window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
        })();
        
        var stop = false;
        
        function animationLoop(time) {
          // The Unix epoch time when function was called is passed as a parameter.
          console.log(time);
        
          if(!stop) {
            /* 
            * Things to note:
            * - Chrome caps at 60 FPS - not a problem your monitor is probably 60hz anyway.
            * - You can specify a DOM element you are drawing in to as the 2nd parameter
            *   so if it is not visible eg display:none then the browser wont call 
            *   function, saving resources.
            */
            window.requestAnimationFrame(animationLoop, optionalElement);
          }
        }
        
        animationLoop();
    },
    crossOriginAjax : function() {
        // http://www.webdavsystem.com/ajax/programming/cross_origin_requests
        // http://www.html5rocks.com/en/tutorials/cors/
    },
    geolocate: function(callback, maxAge, highAccuracy, continuous) {
        function isSupported() {
            if(window.navigator.geolocation) {
              return true;
            } else {
              return false;
            }
          }
          
           /**
           * Handles successful geolocation.
           */
          function geolocateSuccess(position) {
            geolocateCallbackFunction(position);
          }
        
          /**
           * Handle geolocation errors.
           */
          function geolocateError(error) {
            if (error.code === 1) {
              // User denied access to their location.
            }
            else if (error.code === 2) {
              // No position could be obtained.
            }
            else {
              // Request for location timed out.
            }
            
          var  geolocateCallbackFunction = callback;
           var continuousReference = null;
        
            if (maxAge === undefined) {
              maxAge = 3600000;
            }
        
            if (highAccuracy === undefined) {
              highAccuracy = false;
            }
        
            if (isSupported()) {
              if ((continuous !== undefined) && continuous) {
                continuousReference = navigator.geolocation.watchPosition(
                  geolocateSuccess, geolocateError, {maximumAge: maxAge, 
                  enableHighAccuracy: highAccuracy});
              } else {
                navigator.geolocation.getCurrentPosition(geolocateSuccess,
                  geolocateError, {maximumAge: maxAge, enableHighAccuracy: highAccuracy});
              }
            }
          }
            },
            ajaxLvl2 : function(){
                var httpRequest;
                document.getElementById("ajaxButton").onclick = function() { makeRequest('ajaxPage.jsp'); };
                
                function makeRequest(url) {
                  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
                    httpRequest = new XMLHttpRequest();
                  } else if (window.ActiveXObject) { // IE
                    try {
                      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                    }
                    catch (e) {
                      try {
                        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                      }
                      catch (e) {}
                    }
                  }
                
                  if (!httpRequest) {
                    alert('Can not create XMLHttpRequest object');
                    return false;
                  }
                  httpRequest.onreadystatechange = handleResponse;
                  httpRequest.open('GET', url);
                  httpRequest.send();
                }
                
                function handleResponse() {
                  if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) {
                      alert(httpRequest.responseText);
                    } else {
                      alert('There was a problem with the request.');
                    }
                  }
                }
    },
    createElement:function(){
        var ul = document.getElementsByTagName('ul')[0];
        var frag = document.createDocumentFragment();
        var x = 10;
        while (x--) {
          var li = document.createElement('li');
          li.textContent = 'test';
          frag.appendChild(li);
          li.style.width = '100px';
        }
        // Just 1 reflow, and the loop above exceutes much faster!
        ul.appendChild(frag);
        
        /*
            var ul = document.getElementsByTagName('ul')[0];
            var x = 10;
            while (x--) {
              var li = document.createElement('li');
              li.textContent = 'test';
              // 10 reflows
              ul.appendChild(li);
              // Another 10 reflows...
              li.style.width = '100px';
            }
        */
    },
    VisibilityAPI:function(){
         var hidden, visibilityChange; 
        if (typeof document.hidden !== 'undefined') {
          hidden = 'hidden';
          visibilityChange = 'visibilitychange';
        } else if (typeof document.mozHidden !== 'undefined') {
          hidden = 'mozHidden';
          visibilityChange = 'mozvisibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
          hidden = 'webkitHidden';
          visibilityChange = 'webkitvisibilitychange';
        }

        function handleVisibilityChange() {
        if (document[hidden]) {
            console.log('hidden');
          } else {
            console.log('shown');
          }
        }
    
        document.addEventListener(visibilityChange, handleVisibilityChange);
    },
    SpeechAPI:function(){
        function speechHandler(event) {
          if (event.results) {
            var i = event.results.length;
            while(i--) {
              console.log(event.results[i].utterance, event.results[i].confidence);
            }
          }
        }
        
        var element = document.getElementById('speechDemo');
        element.addEventListener('webkitspeechchange', speechHandler, false);
    },
    audio:function(){
        
    },
    webRTC:function(){
        // if (window["localStorage"]) { // your localStorage code here... }
        
        // local.storage.setItem("key1","value1");
        // local.storage.setItem("key1","value2");
        // var value = localstorage.getItem("key1");
        // localStorage["key1"]
        
        // for (var i = 0; i < localStorage.length; i++) {
        // var key = localStorage.key(i);
        // var value = localStorage[key];
        // alert(value);
        // }
        
        // localStorage.clear();
        
        // If 5MB storage exceeds browser should throw QUOTA_EXCEEDED_ERR exception. http://html5test.com/
    }
});