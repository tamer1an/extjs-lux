Ext.define('UserApp.view.form.user.CreateUser',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMT.CreateUser',

    height: 184,
    margin: '0  0 0 10px',
    width: 286,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Create New User',

    tools: [
        {
            xtype: 'tool'
        }
    ],
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'UUName'
        },
        {
            xtype: 'textfield',
            margin: '5px 0 0 0',
            fieldLabel: 'First Name'
        },
        {
            xtype: 'textfield',
            margin: '5px 0 0 0',
            fieldLabel: 'Last Name'
        },
        {
            xtype: 'button',
            margin: '40px 10px 10px 130px',
            overflowX: 'auto',
            text: 'Create'
        },
        {
            xtype: 'button',
            margin: '40px 10px 10px 10px',
            overflowX: 'auto',
            text: 'Cancel'
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
