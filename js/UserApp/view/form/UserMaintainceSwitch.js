Ext.define('UserApp.view.form.UserMaintainceSwitch',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTUserMaintainceSwitch',

    height: 140,
    margin: '0  0 0 10px',
    width: 257,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Local user maintenance',

    items: [
        {
            xtype: 'checkboxfield',
            margin: '10 0 0 47px',
            fieldLabel: '',
            boxLabel: 'Allow local user maintaince'
        },
        {
            xtype: 'button',
            margin: '30px 10px 10px 90px',
            overflowX: 'auto',
            text: 'Confirm'
        },
        {
            xtype: 'button',
            margin: '30px 10px 10px 10px',
            overflowX: 'auto',
            text: 'Cancel'
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
