Ext.define('UserApp.view.grid.branch.BranchGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.branch.BranchGrid',
   
     // requires: [
    //   'Ext.grid.plugin.RowEditing',
    //   'Ext.toolbar.Paging'
        // 'UserApp.store.branch.Branch',
        // 'Ext.grid.column.Boolean',
        // 'Ext.grid.column.Date'
    // ],
    // store: 'store.branch',
    
    iconCls: 'icon_user',
    height: 250,
    title: '',
    columns: [
        { header: 'ID',          dataIndex: 'ColorID'},
        { header: 'TITLE2',      dataIndex: 'ShortName' },
        { header: 'Description', dataIndex: 'LongName' },
        { header: 'Active',      dataIndex: 'LongName' },
    ],
   
    initComponent:function(){         // var me = this;
        this.store = Ext.create('UserApp.store.branch.Branch').load();
         
        console.log(' init branchgrid view ');
        this.callParent(arguments);
    }
});
