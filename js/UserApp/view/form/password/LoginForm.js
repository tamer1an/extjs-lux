Ext.define('UserApp.view.form.LoginForm',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTLoginForm',

    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [
        {
            xtype: 'form',
            action:'index.jsp',
            margin: '30px 0 0 0',
            height: 185,
            width: 400,
            bodyPadding: 10,
            title: 'Login',
            items: [
                {
                    xtype: 'textfield',
                    width: 360,
                    fieldLabel: 'UUName'
                },
                {
                    width: 360,
                    xtype: 'textfield',
                    margin: '0 0 25px 0',
                    inputType: 'password',
                    fieldLabel: 'Password'
                },
                {
                    xtype: 'label',
                    height: 30,
                    width: 300,
                    text: 'If you have problems with login, please contact ACE Administrator'
                },
                {
                    xtype: 'button',
                    margin: '25px 0 15px 325px',
                    text: 'Login' ,
                    itemId:'UM-LOGIN-ButtonId'
//                    , handler: function() {
//                        alert('You clicked the button!');
//                    }
                }
//                {
//                    xtype: 'textfield',
//                    margin: '25px 0 15px 325px',
//                    text: 'Login' ,
//                    inputType: 'submit'
//                }
            ]
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);





    }
});
