Ext.define('UserApp.view.AppMainView',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.AppMainView',
    // requires: [ // ],
    height: 1200,
    
    // viewConfig: {
    //     loadingText: true
    // },
    
    // config: {
    //     search: 
    // },
    
    items:[{
        xtype:'panel',
        title: 'Search Panel',
        height: 180,
        layout: {
            type: 'vbox',
            align: 'left'
        },
        width: '100%',
        tools: [
            {
                xtype: 'tool',
                type: 'down'
            }
        ],
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
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
                    }
                ]
            }
        ],
        items: [
            {
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
        
        console.log(' init view ',this.getSearchForm(),this.loadingText);
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
