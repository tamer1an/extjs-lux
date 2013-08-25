Ext.define('UserApp.view.grid.branch.BranchGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.branch.BranchGrid',
   
    // requires: [
    //     'Ext.grid.plugin.RowEditing',
    //     'Ext.toolbar.Paging'
    // ],
   
    height: 250,
    title: '',
    columns: [
        { header: 'TITLE2',  dataIndex: 'title' },
        { header: 'Description', dataIndex: 'description' }
    ],
   
    initComponent:function(){
        console.log(' init branchgrid view ');
        this.callParent(arguments);
    }
});
