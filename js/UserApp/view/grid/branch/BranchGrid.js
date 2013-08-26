Ext.define('UserApp.view.grid.branch.BranchGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.branch.BranchGrid',
    requires: ['Ext.grid.plugin.CellEditing', 'Ext.form.field.*'],
     // requires: [
    //   'Ext.grid.plugin.RowEditing',
    //   'Ext.toolbar.Paging'
        // 'UserApp.store.branch.Branch',
        // 'Ext.grid.column.Boolean',
        // 'Ext.grid.column.Date'
    // ],
    // store: 'store.branch.Branch', // 'store.branch',
    // autoCreate: true,
    // iconCls: 'icon_user',
    height: 250,
    title:'',
    columns: [
        { header: 'ID',          dataIndex: 'ColorID'},
        { header: 'TITLE2',      dataIndex: 'ShortName' },
        { header: 'Description', dataIndex: 'LongName' },
        { header: 'Active',      dataIndex: 'LongName' },
    ],
   
  // viewConfig: {
  //       emptyText: 'Click a button to show a dataset',
  //       deferEmptyText: false
  //   }
    
    initComponent:function(){         // var me = this; me.xtypesMap
                console.log(' init branchgrid view ');
                
        this.store = Ext.create('UserApp.store.branch.Branch').load(); 
        
        // this.cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        //     clicksToEdit: 2
        // });
        // this.plugins = this.cellEditing;
        
        this.callParent(arguments);
    }
});
