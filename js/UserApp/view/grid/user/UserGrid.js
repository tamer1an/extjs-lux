Ext.define('UserApp.view.grid.user.UserGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.user.UserGrid',
   
    // requires: [
    //     'Ext.grid.plugin.RowEditing',
    //     'Ext.toolbar.Paging'
    // ],
    // store: Ext.create('UserApp.store.user.User'),
    title: '',
    height:300,
    columns: [
        { header: 'User Id',  dataIndex: 'UserID' },
        { header: 'TITLE1 Name', dataIndex: 'Login' },
        { header: 'TITLE1 Name', dataIndex: 'FisrtName' },
        { header: 'TITLE1 Name', dataIndex: 'LastName' }
    ],
        
    initComponent:function(){
        var userStore = Ext.create('UserApp.store.user.User');
        userStore.load(); 
        this.store = userStore;
        
        console.log(' init usergrid view ');
        this.callParent(arguments);
    }
});
