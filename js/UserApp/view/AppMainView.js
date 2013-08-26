Ext.define('UserApp.view.AppMainView',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.AppMainView',
    // requires: [ // ],
    
    // viewConfig: {
    //     loadingText: true
    // }, 
    // this.getSearchForm(),this.loadingText
    
    // config: {
    //     search: 
    // },
    
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
    
    // collapsible: true,
    
    height: 1200,
    items:[{
        xtype:'panel',
        title: 'Search Panel',
        height: 180,
        layout: {
            type: 'vbox',
            align: 'left'
        },
        width: '100%',
        tools: [{
            xtype: 'tool',
            type: 'down'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'combobox',
                padding: '0 10px 0 10px',
                width: 373,
                fieldLabel: 'Login'
            },
            '->','-',
            {
                xtype: 'button',
                disabled: UserApp.config.Runtime.getSomeValue(),
                text: 'Add +'
            }]
        }],
        items: [{
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
                disabled: true,
                width: 370,
                fieldLabel: 'First Name',
                labelWidth: 150,
                padding:'0 0 0 15'
            }, {
                xtype: 'textfield',
                disabled: true,
                width: 371,
                fieldLabel: 'Last Name',
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
        }]
    },{
        xtype: 'UserMGMT.branch.BranchListPanel' //'UserMGMT.role.RoleListPanel'
    },{
        xtype:  'UserMGMT.user.UserListPanel'  
    }],
    // constructor: function(cfg) {
    //      this.initConfig(cfg);
    // },
    // scope:this,
    initComponent:function(){
        console.log(' init view ');
        
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
        
        this.callParent(arguments);
    },
    getSearchForm: function() {
       return [{
                xtype: 'fieldcontainer',
                height: 84,
                width: 507,
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        disabled: true,
                        width: 370,
                        fieldLabel: 'ID',
                        labelWidth: 150,
                        padding:'10 0 0 15'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        width: 370,
                        fieldLabel: 'First Name',
                        labelWidth: 150,
                        padding:'0 0 0 15'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        width: 371,
                        fieldLabel: 'Last Name',
                        labelWidth: 150,
                        padding:'0 0 0 15'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        width: 371,
                        fieldLabel: 'Status',
                        labelWidth: 150,
                        padding:'0 0 0 15'
                    }
                ]
            }
        ]
    }
});
