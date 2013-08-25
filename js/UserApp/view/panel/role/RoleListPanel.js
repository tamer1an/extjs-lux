Ext.define('UserApp.view.panel.role.RoleListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.role.RoleListPanel',
      
    bodyPadding: 10,
    title: 'TITLE1',
    layout: 'anchor',
    tools: [{
        xtype: 'tool',
        type: 'down'
    }],
    items: [{
        xtype: 'UserMGMT.role.RoleGrid'
    }],
        
    initComponent:function(){
        console.log(' Init rolepanel view ');
        this.callParent(arguments);
    }
});
