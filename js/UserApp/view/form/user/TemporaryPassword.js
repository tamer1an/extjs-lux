Ext.define('UserApp.view.form.TemporaryPassword',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTTemporaryPassword',

    height: 119,
    margin: '0  0 0 10px',
    width: 386,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Temporary ',
    tools: [
        {
            xtype: 'tool'
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '',
            value: 'Temporary is: ....'
        },
        {
            xtype: 'button',
            margin: '20px 10px 10px 330px',
            overflowX: 'auto',
            text: 'OK'
        }
    ],
    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
