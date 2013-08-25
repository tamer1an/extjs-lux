Ext.define('UserApp.view.form.branch.BranchDetails',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMT.BranchDetails',

    height: 220,
    margin: '0  0 0 10px',
    width: 402,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Branch Details',

    tools: [
        {
            xtype: 'tool'
        }
    ],
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name'
        },
        {
            xtype: 'textareafield',
            height: 99,
            width: 373,
            fieldLabel: 'Details'
        },
        {
            xtype: 'button',
            margin: '10px 10px 10px 340px',
            overflowX: 'auto',
            text: 'Ok'
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
