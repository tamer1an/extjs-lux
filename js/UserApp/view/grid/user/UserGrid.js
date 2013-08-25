Ext.define('UserApp.view.grid.user.UserGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.user.UserGrid',
   
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
        console.log(' init usergrid view ');
        this.callParent(arguments);
    }
});
