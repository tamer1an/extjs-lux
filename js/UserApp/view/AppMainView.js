Ext.define('UserApp.view.AppMainView',{    // requires: [ // ],
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.AppMainView',
    defaults:{ collapsible: true },
    height: 1200,

    initComponent:function(){              console.log(' init app view ');

        this.items = [{
            xtype:'UserMGMT.core.Panel',
            width: '100%',
            height: 180,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            title: this.getAppTitle(),
            tbar:  this.getAppTools(),
            items: this.getSearchForm()
        },{
            xtype: 'UserMGMT.role.RoleListPanel'
        },{
            xtype: 'UserMGMT.branch.BranchListPanel'
        }];

        this.callParent(arguments);
    },
    getAppTitle: function() {
        return 'Search';
    },
    getAppTools: function() {
       return [{
           xtype: 'combobox',
           padding: '0 10px 0 10px',
           width: 373,
           fieldLabel: 'Login'
       },'->','-',{
           xtype: 'UserMGMT.core.Button',
           disabled: UserApp.config.Runtime.getUserAuth(),
           text: 'New +',
           handler : function (){   //TODO: refine it to refs with property autoCreate
               Ext.create('UserApp.view.window.user.AddUserWindow',{}).show();
           }
       }];
    },
    getSearchForm: function() {
       return [{
           xtype: 'fieldcontainer',
           height: 84,
           width: 507,
           fieldLabel: '',
           items: [{
               xtype: 'textfield',
               disabled: true,
               width: 370,
               fieldLabel: 'ID',
               labelWidth: 150,
               padding:'10 0 0 15'
           }, {
               xtype: 'textfield',
               disabled: UserApp.config.Runtime.getUserAuth(),
               width: 370,
               fieldLabel: 'First',
               labelWidth: 150,
               padding:'0 0 0 15'
           }, {
               xtype: 'textfield',
               disabled: UserApp.config.Runtime.getUserAuth(),
               width: 371,
               fieldLabel: 'Last',
               labelWidth: 150,
               padding:'0 0 0 15'
           }, {
               xtype: 'textfield',
               disabled: true,
               width: 371,
               fieldLabel: 'Status',
               labelWidth: 150,
               padding:'0 0 0 15'
           }]
       }];
    }
});



/// initComponent : func.....

//  this.linksPanel.on({
//      scope:this
//     ,render:function() {
//         this.linksPanel.body.on({
//              scope:this
//             ,click:this.onLinkClick
//             ,delegate:'a.examplelink'
//             ,stopEvent:true
//         });
//     }
// });

//   ...define('',{

// listeners: {
//     click: {
//         element: 'el', //bind to the underlying el property on the panel
//         fn: function(){ console.log('click el'); }
//     },
//     dblclick: {
//         element: 'body', //bind to the underlying body property on the panel
//         fn: function(){ console.log('dblclick body'); }
//     },
//     // change: window.alert
//     // scope: this
// },

// viewConfig: {
//     loadingText: true
// },   // this.getSearchForm(),this.loadingText

// config: {
//     search:
// },

// constructor: function(cfg) {  //  xtype: 'UserMGMT.user.UserListPanel'
//      this.initConfig(cfg);
// },