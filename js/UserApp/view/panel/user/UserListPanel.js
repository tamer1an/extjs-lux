Ext.define('UserApp.view.panel.user.UserListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.user.UserListPanel',
    bodyPadding: 10,
    title: 'User list',
    // layout: 'fit',
    // tools: [{
    //     xtype: 'tool',
    //     type: 'down'
    // }],
    items: [{
        xtype: 'UserMGMT.user.UserGrid'
    }],
    initComponent:function(){
        console.log(' Init upanel view ');
        this.callParent(arguments);
    }
});
