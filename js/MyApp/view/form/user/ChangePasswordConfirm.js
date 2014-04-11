Ext.define('UserApp.view.form.user.ChangePasswordConfirm',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMT.ChangePasswordConfirm',

    height: 153,
    margin: '0  0 0 10px',
    width: 400,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Change',

    tools: [
        {
            xtype: 'tool'
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            margin: '0 0 0 100',
            width: 242,
            fieldLabel: '',
            value: 'Are you sure ?'
        },
        {
            xtype: 'button',
            margin: '40px 10px 10px 250px',
            overflowX: 'auto',
            text: 'Reset'
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
