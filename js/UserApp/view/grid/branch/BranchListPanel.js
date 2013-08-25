Ext.define('UserApp.view.grid.branch.BranchListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.branch.BranchListPanel',
   
    // requires: [
    //     'Ext.grid.plugin.RowEditing',
    //     'Ext.toolbar.Paging'
    // ],
   
    bodyPadding: 10,
    title: 'TITLE2',
    tools: [
        {
            xtype: 'tool',
            type: 'down'
        }
    ],
    items: [{
        xtype: 'gridpanel',
        height: 250,
        title: '',
        columns: [
            { header: 'TITLE2',  dataIndex: 'title' },
            { header: 'Description', dataIndex: 'description' }
        ]
    }],
     dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            '->', '-',
            {
                xtype: 'button',
                text: 'Add +',
                disabled: true
            }
        ]
    }],
        
    initComponent:function(){
        console.log(' init branchlist view ');
        this.callParent(arguments);
    }
});
