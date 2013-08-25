Ext.define('UserApp.view.grid.role.RoleGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.role.RoleGrid',
   
    // requires: [
    //     'Ext.grid.plugin.RowEditing',
    //     'Ext.toolbar.Paging'
    // ],
   
    title: '',
    height:300,
    columns: [
        { header: 'TITLE1 Id',  dataIndex: 'TITLE1Id' },
        { header: 'TITLE1 Name', dataIndex: 'TITLE1Name' }
    ],
        
    initComponent:function(){
        console.log(' init rolegrid view ');
        this.callParent(arguments);
    }
});
