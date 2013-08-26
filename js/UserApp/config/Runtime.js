Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        someValue : false   // initialize to 0
    }
});
  
  
  //////////// file
//    Ext.apply(Ext.form.field.VTypes, {
//     file: function(val, field) {
//         var types = ['rtf', 'pdf', 'doc'],
//             ext = val.substring(val.lastIndexOf('.') + 1);
//         if(Ext.Array.indexOf(types, ext) === -1) {
//             return false;
//         }
//         return true;
//     }
//     ,fileText: 'Invalid file'
// });
   // var input = Ext.get(field.id+'-fileInputEl'); var input = document.getElementById(field.id+'-fileInputEl');
   
   // Ext.define('fileupload',{
   //      extend: 'Ext.form.field.Text'
   //      ,alias: 'widget.fileupload' // теперь мы можем написать xtype: 'fileupload'
   //      ,inputType: 'file'
   //      ,listeners: {
   //          render: function (me, eOpts) {
   //              var el = Ext.get(me.id+'-inputEl');
   //              el.set({
   //                  size: me.inputSize || 1
   //              });
   //              if(me.multiple) {
   //                  el.set({
   //                      multiple: 'multiple'
   //                  });
   //              }
   //          }
   //      }
   //  });
   
   // Ext.apply(Ext.form.field.VTypes, {
   //      file: function(val, field) {
   //          var input, files, file
   //          ,acceptSize = field.acceptSize || 4096 //  Максимальный вес файлов
   //          ,acceptMimes = field.acceptMimes || ['rtf', 'pdf', 'doc', 'xls', 'xlsx', 'zip', 'rar']; // Разрешенные типы

   //          input = Ext.get(field.id+'-inputEl');
   //          files = input.getAttribute('files');
   //          if ( ! files || ! window.FileReader) {
   //              return true; // Мы имеем дело с неправильным браузером. Из вредности можно вернуть и false
   //          }
    
   //          for(var i = 0, l = files.length; i < l; i++) { // смотрим размеры файлов
   //              file = files[i];
   //              if(file.size > acceptSize * 1024) {
   //                  this.fileText = (file.size / 1048576).toFixed(1) + ' MB: invalid file size ('+(acceptSize / 1024).toFixed(1)+' MB max)';
   //                  return false;
   //              }

   //              var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
   //              if(Ext.Array.indexOf(acceptMimes, ext) === -1) { // смотрим расширения файлов
   //                  this.fileText = 'Invalid file type ('+ext+')';
   //                  return false;
   //              }
   //          }
   //          return true;
   //      }
   //  });
   
    // {
    //         xtype: 'fileupload'
    //         ,vtype: 'file'
    //         ,multiple: true // разрешаем выбрать несколько файлов
    //         ,acceptMimes: ['doc', 'xls', 'xlsx', 'pdf', 'zip', 'rar'] // Устанавливаем разрешенные типы
    //         ,acceptSize: 2048 // Максимальный размер
    //         ,inputSize: 76 // Атрибут size
    //         ,fieldLabel: 'File <span class="gray">(doc, xls, xlsx, pdf, zip, rar; 2 MB max)</span>'
    //         ,msgTarget: 'under'
    //         ,name: 'filesToUpload[]'
    //     }
   
   
   /////////////////////////////////////////////
   // constructor : function(config){
   //      this.initConfig(config);
   //  },
  
  
   // localStorage : function(){
   //       // if (window["localStorage"]) { // your localStorage code here... }
        
   //      // local.storage.setItem("key1","value1");
   //      // local.storage.setItem("key1","value2");
   //      // var value = localstorage.getItem("key1");
   //      // localStorage["key1"]
        
   //      // for (var i = 0; i < localStorage.length; i++) {
   //      //     var key = localStorage.key(i);
   //      //     var value = localStorage[key];
   //      //     alert(value);
   //      // }
        
   //      // localStorage.clear();
        
   //      // If 5MB storage exceeds browser should throw QUOTA_EXCEEDED_ERR exception. http://html5test.com/      
   //  },
   //  requestAnimationFrame : function(){
   //      window.setTimeout(function() {
   //        // Animation code here.
   //      }, 17);
                
   //      window.requestAnimationFrame = (function(){
   //          return    window.requestAnimationFrame       || 
   //                    window.webkitRequestAnimationFrame || 
   //                    window.mozRequestAnimationFrame    || 
   //                    window.oRequestAnimationFrame      || 
   //                    window.msRequestAnimationFrame     || 
   //                    function( callback ){
   //                      window.setTimeout(callback, 1000 / 60);
   //                    };
   //      })();
        
   //      var stop = false;
        
   //      function animationLoop(time) {
   //        // The Unix epoch time when function was called is passed as a parameter.
   //        console.log(time);
        
   //        if(!stop) {
   //          /* 
   //          * Things to note:
   //          * - Chrome caps at 60 FPS - not a problem your monitor is probably 60hz anyway.
   //          * - You can specify a DOM element you are drawing in to as the 2nd parameter
   //          *   so if it is not visible eg display:none then the browser wont call 
   //          *   function, saving resources.
   //          */
   //          window.requestAnimationFrame(animationLoop, optionalElement);
   //        }
   //      }
        
   //      animationLoop();
   //  },
   //  crossOriginAjax : function() {
   //      // http://www.webdavsystem.com/ajax/programming/cross_origin_requests
   //      // http://www.html5rocks.com/en/tutorials/cors/
   //  },
   //  geolocate: function(callback, maxAge, highAccuracy, continuous) {
   //       var  geolocateCallbackFunction = callback;
   //       var continuousReference = null;
        
   //      function isSupported() {
   //          if(window.navigator.geolocation) {
   //            return true;
   //          } else {
   //            return false;
   //          }
   //        }
          
   //         /**
   //         * Handles successful geolocation.
   //         */
   //        function geolocateSuccess(position) {
   //          geolocateCallbackFunction(position);
   //        }
        
   //        /**
   //         * Handle geolocation errors.
   //         */
   //        function geolocateError(error) {
   //          if (error.code === 1) {
   //            // User denied access to their location.
   //          }
   //          else if (error.code === 2) {
   //            // No position could be obtained.
   //          }
   //          else {
   //            // Request for location timed out.
   //          }

        
   //          if (maxAge === undefined) {
   //            maxAge = 3600000;
   //          }
        
   //          if (highAccuracy === undefined) {
   //            highAccuracy = false;
   //          }
        
   //          if (isSupported()) {
   //            if ((continuous !== undefined) && continuous) {
   //              continuousReference = navigator.geolocation.watchPosition(
   //                geolocateSuccess, geolocateError, {maximumAge: maxAge, 
   //                enableHighAccuracy: highAccuracy});
   //            } else {
   //              navigator.geolocation.getCurrentPosition(geolocateSuccess,
   //                geolocateError, {maximumAge: maxAge, enableHighAccuracy: highAccuracy});
   //            }
   //          }
   //        }
   //          },
   //          ajaxLvl2 : function(){
   //              var httpRequest;
   //              document.getElementById("ajaxButton").onclick = function() { makeRequest('ajaxPage.jsp'); };
                
   //              function makeRequest(url) {
   //                if (window.XMLHttpRequest) { // Mozilla, Safari, ...
   //                  httpRequest = new XMLHttpRequest();
   //                } else if (window.ActiveXObject) { // IE
   //                  try {
   //                    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
   //                  }
   //                  catch (e) {
   //                    try {
   //                      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
   //                    }
   //                    catch (e) {}
   //                  }
   //                }
                
   //                if (!httpRequest) {
   //                  alert('Can not create XMLHttpRequest object');
   //                  return false;
   //                }
   //                httpRequest.onreadystatechange = handleResponse;
   //                httpRequest.open('GET', url);
   //                httpRequest.send();
   //              }
                
   //              function handleResponse() {
   //                if (httpRequest.readyState === 4) {
   //                  if (httpRequest.status === 200) {
   //                    alert(httpRequest.responseText);
   //                  } else {
   //                    alert('There was a problem with the request.');
   //                  }
   //                }
   //              }
   //  },
   //  createElement:function(){
   //      var ul = document.getElementsByTagName('ul')[0];
   //      var frag = document.createDocumentFragment();
   //      var x = 10;
   //      while (x--) {
   //        var li = document.createElement('li');
   //        li.textContent = 'test';
   //        frag.appendChild(li);
   //        li.style.width = '100px';
   //      }
   //      // Just 1 reflow, and the loop above exceutes much faster!
   //      ul.appendChild(frag);
        
   //      /*
   //          var ul = document.getElementsByTagName('ul')[0];
   //          var x = 10;
   //          while (x--) {
   //            var li = document.createElement('li');
   //            li.textContent = 'test';
   //            // 10 reflows
   //            ul.appendChild(li);
   //            // Another 10 reflows...
   //            li.style.width = '100px';
   //          }
   //      */
   //  },
   //  VisibilityAPI:function(){
   //       var hidden, visibilityChange; 
   //      if (typeof document.hidden !== 'undefined') {
   //        hidden = 'hidden';
   //        visibilityChange = 'visibilitychange';
   //      } else if (typeof document.mozHidden !== 'undefined') {
   //        hidden = 'mozHidden';
   //        visibilityChange = 'mozvisibilitychange';
   //      } else if (typeof document.msHidden !== 'undefined') {
   //        hidden = 'msHidden';
   //        visibilityChange = 'msvisibilitychange';
   //      } else if (typeof document.webkitHidden !== 'undefined') {
   //        hidden = 'webkitHidden';
   //        visibilityChange = 'webkitvisibilitychange';
   //      }

   //      function handleVisibilityChange() {
   //      if (document[hidden]) {
   //          console.log('hidden');
   //        } else {
   //          console.log('shown');
   //        }
   //      }
    
   //      document.addEventListener(visibilityChange, handleVisibilityChange);
   //  },
   //  SpeechAPI:function(){
   //      function speechHandler(event) {
   //        if (event.results) {
   //          var i = event.results.length;
   //          while(i--) {
   //            console.log(event.results[i].utterance, event.results[i].confidence);
   //          }
   //        }
   //      }
        
   //      var element = document.getElementById('speechDemo');
   //      element.addEventListener('webkitspeechchange', speechHandler, false);
   //  },
   //  audio:function(){
        
   //  },
   //  webRTC:function(){
   //      // if (window["localStorage"]) { // your localStorage code here... }
        
   //      // local.storage.setItem("key1","value1");
   //      // local.storage.setItem("key1","value2");
   //      // var value = localstorage.getItem("key1");
   //      // localStorage["key1"]
        
   //      // for (var i = 0; i < localStorage.length; i++) {
   //      // var key = localStorage.key(i);
   //      // var value = localStorage[key];
   //      // alert(value);
   //      // }
        
   //      // localStorage.clear();
        
   //      // If 5MB storage exceeds browser should throw QUOTA_EXCEEDED_ERR exception. http://html5test.com/
   //  }