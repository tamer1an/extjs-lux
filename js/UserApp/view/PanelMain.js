Ext.define('UserApp.view.PanelMain',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTPanelMain',
    height: 1000,
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
                        fieldLabel: 'UUName / Login ID'
                    },
                    '->','-',
                    {
                        xtype: 'button',
                        disabled: true,
                        text: 'Add New User'
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
        xtype: 'form',
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
        xtype: 'form',
        bodyPadding: 10,
        title: 'TITLE2',
        tools: [
            {
                xtype: 'tool',
                type: 'down'
            }
        ],
        items: [
            {
                xtype: 'gridpanel',
                height: 250,
                title: '',
                columns: [
                    { header: 'TITLE2',  dataIndex: 'title' },
                    { header: 'Description', dataIndex: 'description' }
                ]
            }
        ],
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    '->', '-',
                    {
                        xtype: 'button',
                        text: 'Add +',
                        disabled: true
                    }
                ]
            }
        ]
    }],
    initComponent:function(){
        console.log(' init view ');
        this.callParent(arguments);
    }
});
