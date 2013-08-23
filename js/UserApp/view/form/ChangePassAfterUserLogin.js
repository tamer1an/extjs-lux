Ext.define('UserApp.view.form.ChangePassAfterUserLogin',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTChangePassAfterUserLogin',

//===== defaultConfigs ======//
    height: 1000,

    items: [
        {
            xtype: 'form',
            height: 185,
            margin: '30 0 0 130',
            width: 400,
            layout: {
                type: 'auto'
            },
            bodyPadding: 10,
            title: 'Change Password',
            items: [
                {
                    xtype: 'textfield',
                    margin: '20px 0 0 0',
                    width: 369,
                    fieldLabel: 'New Password',
                    labelWidth: 200
                },
                {
                    xtype: 'textfield',
                    margin: '5 0 0 0',
                    width: 369,
                    fieldLabel: 'Confirm Password',
                    labelWidth: 200
                },
                {
                    xtype: 'button',
                    margin: '40px 10px 10px 340px',
                    overflowX: 'auto',
                    text: 'Ok'
                }
            ]
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
