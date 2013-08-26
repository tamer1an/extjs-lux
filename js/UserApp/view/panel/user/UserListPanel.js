Ext.define('UserApp.view.panel.user.UserListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.user.UserListPanel',
      
    bodyPadding: 10,
    title: 'TITLE1',
    // layout: 'fit',
    tools: [{
        xtype: 'tool',
        type: 'down'
    }],
    items: [{
        xtype: 'UserMGMT.user.UserGrid'
    }],
        
    initComponent:function(){
        console.log(' Init userpanel view ');
        this.callParent(arguments);
    }
});
