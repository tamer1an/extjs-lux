/** Application domain model
 *  @namespace {MYTEST} namespace
 * 
 *   Ext.Loader.setConfig({
 *      enabled: true,
 *       disableCaching: false,
 *       paths: {UsersApp: 'app', Ext: 'ext-4.0.7-gpl/src'}
 *   });
 * 
 *  @param MYTEST.config.Runtime.getSomeValue()
 *  @optional setupApplication: function(){ // }, to add extra control or use Runtime
 *  @return MYTEST
 *
 */
Ext.application({    
    name:'MYTEST',
    appFolder:'src/MYTEST',   
    // autoCreateViewport: true,
    requires : ['MYTEST.config.Runtime','MYTEST.core.ButtonView'],
    // models: ['branch.Branch'],//,'user.User'],
    // stores: ['branch.Branch'],//,'user.User'],
    // All the paths for custom classes
    // paths: {
    //     'Ext.ux': '../../../examples/ux/'
    // },
    controllers:[
       'AppMainView'
    ],
    launch: function(){        console.log(' launch ');
    
    
    /**
     * Basic reporter that outputs spec results to the browser console.
     * Useful if you need to test an html page and don't want the TrivialReporter
     * markup mucking things up.
     *
     * Usage:
     *
     * jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
     * jasmine.getEnv().execute();
     * 
     * // include the tests in the app.html head
     * // jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
     * // jasmine.getEnv().execute();
     */
    
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;
      
      jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());

    //   var htmlReporter = new jasmine.HtmlReporter();

    //   jasmineEnv.addReporter(htmlReporter);

    //   jasmineEnv.specFilter = function(spec) {
    //     return htmlReporter.specFilter(spec);
    //   };

      execJasmine();

      function execJasmine() {
          jasmine.getEnv().execute();
        // jasmineEnv.execute();
      }
      
      

    },
    getAppBBar : function() {
       var auth = MYTEST.config.Runtime.getUserAuth(),
           coreBtn = 'UserMGMT.core.Button';

       return [{
            xtype: coreBtn,
            disabled: auth,
            text: 'Save'
        },'-', {
            xtype: coreBtn,
            disabled: auth,
            text: 'Reset'
        },'-', {
            xtype: coreBtn,
            disabled: auth,
            text: 'Reset'
        },'-', {
            xtype: coreBtn,
            disabled: auth,
            text: 'Disable'
        },'-', {
            xtype: coreBtn,
            text: 'Delete'
        }];
    },
    getAppTools : function() {
         return [{
            xtype: 'button',
            type: 'gear',
            text: '<b>OFF</b>'
         }];
    },
    getAppTitle : function() {
        return 'Main Menu';
    }
});



        //  Ext.create('Ext.container.Viewport', {
        //     layout: 'fit',
        //     renderTo: document.getElementById('User-App'),
        //     items: [{
        //         xtype:  'UserMGMT.core.Panel',
        //         layout: 'anchor',
        //         region: 'center',
        //         title:   this.getAppTitle(),
        //         tools:   this.getAppTools(),
        //         bbar:    this.getAppBBar(),
        //         items:[{
        //             xtype:  'UserMGMT.AppMainView',
        //             anchor: '100% 100%'
        //         }]
        //     }]
        // });
        
// (function() {
    //   var jasmineEnv = jasmine.getEnv();
    //   jasmineEnv.updateInterval = 1000;

    //   var htmlReporter = new jasmine.HtmlReporter();

    //   jasmineEnv.addReporter(htmlReporter);

    //   jasmineEnv.specFilter = function(spec) {
    //     return htmlReporter.specFilter(spec);
    //   };

    //   var currentWindowOnload = window.onload;

    //   window.onload = function() {
    //     if (currentWindowOnload) {
    //       currentWindowOnload();
    //     }
    //     execJasmine();
    //   };

    //   function execJasmine() {
    //     jasmineEnv.execute();
    //   }

    // })();