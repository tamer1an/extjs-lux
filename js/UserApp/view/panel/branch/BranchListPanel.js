Ext.define('UserApp.view.panel.branch.BranchListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.branch.BranchListPanel',
      
    bodyPadding: 10,
    title: 'TITLE2',
    tools: [{
        xtype: 'tool',
        type: 'down'
    }],
    items: [{
        xtype: 'UserMGMT.branch.BranchGrid'
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            '->', '-',
            {
                xtype: 'button',
                text:  'Add +',
                disabled: UserApp.config.Runtime.getSomeValue()
        }]
    }],
    
    initComponent:function(){
        console.log(' Init branchpanel view ');
        this.callParent(arguments);
    }
});
