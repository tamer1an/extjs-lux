/** 
 * Application domain model 
 * 
 *   Ext.Loader.setConfig({
 *      enabled: true,
 *       disableCaching: false,
 *       paths: {UsersApp: 'app', Ext: 'ext-4.0.7-gpl/src'}
 *   });
 * 
 *  @param UserApp.config.Runtime.getSomeValue()
 *  @optional setupApplication: function(){ // }, to add extra control or use Runtime
 *  @return ...
 */
Ext.application({    
    name:'UserApp',
    appFolder:'../js/UserApp',   
    // autoCreateViewport : true,
    requires : ['UserApp.config.Runtime'],   
        
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
                xtype:  'panel',
                layout: 'anchor',
                region: 'center',
                
                title:   this.getAppTitle(),
                tools:   this.getAppTools(),
                bbar:    this.getAppBBar(),
                
                // lbar: [{ xtype: 'button', text: 'Button 4' }],
                // dockedItems: this.getAppDocked(),
                
                items:[{
                    xtype:  'UserMGMT.AppMainView' ,
                    anchor: '100% 100%'
                }]
            }]
        });
    },
    getAppBBar : function() {
       var auth = UserApp.config.Runtime.getSomeValue();
        
       return [{
                xtype: 'button',
                disabled: auth,
                text: 'Save'
            },'-', {
                xtype: 'button',
                disabled: auth,
                text: 'Reset'
            },'-', {
                xtype: 'button',
                disabled: auth,
                text: 'Reset'
            },'-', {
                xtype: 'button',
                disabled: auth,
                text: 'Disable'
            },'-', {
                xtype: 'button',
                text: 'Delete'
            }]
    },
    // getAppDocked : function() {             
    //     var auth = UserApp.config.Runtime.getSomeValue();
        
    //      return [{
    //         xtype: 'toolbar',
    //         dock: 'bottom',
    //         items: [{
    //             xtype: 'button',
    //             disabled: auth,
    //             text: 'Save'
    //         },'-', {
    //             xtype: 'button',
    //             disabled: auth,
    //             text: 'Reset'
    //         },'-', {
    //             xtype: 'button',
    //             disabled: auth,
    //             text: 'Reset'
    //         },'-', {
    //             xtype: 'button',
    //             disabled: auth,
    //             text: 'Disable'
    //         },'-', {
    //             xtype: 'button',
    //             text: 'Delete'
    //         }]
    //     }];
    // },
    getAppTools : function() {      
         return [{
                    xtype: 'tool',
                    type: 'gear'
               }];
    },
    getAppTitle : function() { 
        return 'User+';
    }
});

 /*   
 /// Store
    var userStore = Ext.create('UserApp.store.user.User')
    userStore.load(); 
    
    console.log (':',userStore, userStore.getCount());
 
 
 ////Domain model EXT 4.2
       //  this.listen({
       //     controller: {},
       //     component: {},
       //     global: {},
       //     store: {}  
       // });
       
       this.listen({
           controller: {
               '#App': {
                   tokenchange: this.dispatch
               }
           },
           component: {
               'menu[xtype=layout.menu] menuitem': {
                   click: this.addHistory
               } 
           },
           global: {},
           store: {}  
       });
*/

/* ============ History =================
    requires: [
        'Ext.util.History'
    ],
    Ext.util.History.init(function(){
        var hash = document.location.hash;
        me.getAppController().fireEvent( 'tokenchange', hash.replace( '#', '' ) );
    })
    // add change handler for Ext.util.History; when a change in the token
    // occurs, this will fire our controller's event to load the appropriate content
    Ext.util.History.on( 'change', function( token ){
        me.getAppController().fireEvent( 'tokenchange', token );
    });
*/


// /** History logic
//      * Add history token to Ext.util.History
//      * @param {Ext.menu.Item} item
//      * @param {Object} e
//      * @params {Object} opts
//      */
//     addHistory: function( item, e, opts ) {
//         var me = this,
//             token = item.itemId;
//         Ext.util.History.add( token );
//         me.fireEvent( 'tokenchange', token )
//     },
//     /**
//      * Handles token change and directs creation of content in center region
//      * @param {String} token
//      */
//     dispatch: function( token ) {
//         var me = this,
//             config;
//         // switch on token to determine which content to create
//         switch( token ) {
//             case 'staff':
//                 config = {
//                     xtype: 'panel',
//                     title: 'Staff',
//                     html: 'Some staff content'
//                 };
//                 break;
//             case 'options':
//                 config = {
//                     xtype: 'panel',
//                     title: 'Options',
//                     html: 'Some options content'
//                 };
//                 break;
//             case 'inventory':
//                 config = {
//                     xtype: 'panel',
//                     title: 'Inventory',
//                     html: 'Some inventory content' 
//                 };
//                 break;
//             default: 
//                 config = {
//                     xtype: 'layout.landing'
//                 };
//                 break;
//         }
//         me.updateCenterRegion( config );
//     },
//     /**
//      * Updates center region of app with passed configuration
//      * @param {Object} config
//      */
//     updateCenterRegion: function( config ) {
//         var me = this,
//             center = me.getCenterRegion();
//         // remove all existing content
//         center.removeAll( true );
//         // add new content
//         center.add( config );
//     }
//     ...
// });