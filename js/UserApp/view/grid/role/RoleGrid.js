Ext.define('UserApp.view.grid.role.RoleGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.role.RoleGrid',

    // requires: [
    //     'Ext.grid.plugin.RowEditing',
    //     'Ext.toolbar.Paging'
    // ],
    // store: Ext.create('UserApp.store.user.User'),
    height:300,

    config:{
        title: '',

        columns: [
            { header: 'User Id',  dataIndex: 'UserID' },
            { header: 'TITLE1 Name', dataIndex: 'Login' },
            { header: 'TITLE1 Name', dataIndex: 'FisrtName' },
            { header: 'TITLE1 Name', dataIndex: 'LastName' /*width:"100%"*/ }
        ]
    },

    initComponent:function(){
        // var userStore = Ext.create('UserApp.store.user.User');
        // userStore.load();

        this.store = Ext.create('UserApp.store.user.User').load();

        console.log(' init rgrid view ');
        this.callParent(arguments);
    }
});
