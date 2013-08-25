Ext.define('UserApp.view.AppMainView',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.AppMainView',
    // requires: [
        
    // ],
    height: 1200,
    items:[{
        xtype:'panel',
        title: 'Search Details Panel',
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
                        disabled: true,
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
        xtype: 'panel',
        bodyPadding: 10,
        title: 'TITLE1',
        layout: 'anchor',
        tools: [
            {
                xtype: 'tool',
                type: 'down'
            }
        ],
        items: [
            {
                xtype: 'gridpanel',
                title: '',
                height:300,
                columns: [
                    { header: 'TITLE1 Id',  dataIndex: 'TITLE1Id' },
                    { header: 'TITLE1 Name', dataIndex: 'TITLE1Name' }
                ]

            }
        ]
    },{
        xtype: 'UserMGMT.branch.BranchListPanel'
    }],
    initComponent:function(){
        console.log(' init view ');
        this.callParent(arguments);
    }
});
