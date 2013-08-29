/** Application domain model
 *  @namespace {UserApp} namespace
 * 
 *   Ext.Loader.setConfig({
 *      enabled: true,
 *       disableCaching: false,
 *       paths: {UsersApp: 'app', Ext: 'ext-4.0.7-gpl/src'}
 *   });
 * 
 *  @param UserApp.config.Runtime.getSomeValue()
 *  @optional setupApplication: function(){ // }, to add extra control or use Runtime
 *  @return UserApp
 *
 */
Ext.application({    
    name:'UserApp',
    appFolder:'../js/UserApp',   
    
    requires : ['UserApp.config.Runtime','UserApp.core.ButtonView'],
        
    // models: ['branch.Branch'],//,'user.User'],
    // stores: ['branch.Branch'],//,'user.User'],
    
    // All the paths for custom classes
    // paths: {
    //     'Ext.ux': '../../../examples/ux/'
    // },

    controllers:[
       'AppMainView'
       ,'ui.Branch'
       ,'ui.Role'
       ,'ui.User'
    ],
    
    launch: function(){                                     console.log(' launch ');

         Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            renderTo: document.getElementById('User-App'),
            items: [{
                xtype:  'UserMGMT.core.Panel',
                layout: 'anchor',
                region: 'center',
                
                title:   this.getAppTitle(),
                tools:   this.getAppTools(),
                bbar:    this.getAppBBar(),
                
                items:[{
                    xtype:  'UserMGMT.AppMainView',
                    anchor: '100% 100%'
                }]
            }]
        });
    },
    getAppBBar : function() {
       var auth = UserApp.config.Runtime.getUserAuth(),
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