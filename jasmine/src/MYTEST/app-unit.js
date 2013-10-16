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
    autoCreateViewport: true,
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