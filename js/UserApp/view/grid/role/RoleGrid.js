Ext.define('UserApp.view.grid.role.RoleGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.role.RoleGrid',
   
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
        console.log(' init rolegrid view ');
        this.callParent(arguments);
    }
});
