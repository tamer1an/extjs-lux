Ext.define('UserApp.view.panel.role.RoleListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.role.RoleListPanel',
    layout: 'anchor',
    bodyPadding: 10,

    items: [{
        xtype: 'UserMGMT.role.RoleGrid'
    }],
        
    initComponent:function(){                    console.log(' Init rpanel view ');
        this.title = this.getAppTitle(),
        this.callParent(arguments);
    },
    getAppTitle:function(){
        return 'Role';
    }
});
