Ext.define('UserApp.view.grid.branch.BranchGrid',{
    extend: 'UserApp.core.GridView',
    alias: 'widget.UserMGMT.branch.BranchGrid',
    requires: [
        // 'Ext.grid.plugin.CellEditing', 
        // 'Ext.form.field.*',
    //  'Ext.grid.*',
    // 'Ext.data.*',
    // 'Ext.ux.RowExpander',
    // 'Ext.selection.CheckboxModel'
    ],
     // requires: [
    //   'Ext.grid.plugin.RowEditing',
    //   'Ext.toolbar.Paging'
        // 'UserApp.store.branch.Branch',
        // 'Ext.grid.column.Boolean',
        // 'Ext.grid.column.Date'
    // ],
    // store: 'store.branch.Branch', // 'store.branch',
    autoCreate: true,
    enableLocking: true,
    columnLines: true,
    // iconCls: 'icon_user',
    height: 250,
    title:'',
    // selType: 'rowmodel',
    // selModel: {
    //     mode: 'MULTI'
    // },

    selModel: UserApp.config.Runtime.sm,
    columns: [
        // {header: ' ', width: 55, xtype: 'checkcolumn'},
        { 
          header: 'ID',     
          dataIndex: 'ColorID'   , 
          editor: {
                allowBlank: false
            } 
        },
        { 
            header: 'TITLE2',      
            dataIndex: 'ShortName'  ,  
            editor: {
                allowBlank: false,
                vtype: 'alpha'
            } 
        },
        { 
            header: 'Description', 
            dataIndex: 'LongName'  ,  
            editor: {
                allowBlank: false,
                vtype: 'alphanum'
            } 
        }
    ],
   tbar: [{
            text: 'Add Employee',
            iconCls: 'employee-add',
            handler : function() {
                UserApp.config.Runtime.rowEdit.cancelEdit();

                // // Create a record instance through the ModelManager
                // var r = Ext.ModelManager.create({
                //     name: 'New Guy',
                //     email: 'new@sencha-test.com',
                //     start: new Date(),
                //     salary: 50000,
                //     active: true
                // }, 'Employee');

                // store.insert(0, r);
                UserApp.config.Runtime.rowEdit.startEdit(0, 0);
            }
        }, {
            itemId: 'removeEmployee',
            text: 'Remove Employee',
            iconCls: 'employee-remove',
            handler: function() {
                // var sm = grid.getSelectionModel();
                // UserApp.config.Runtime.rowEdit.cancelEdit();
                // store.remove(sm.getSelection());
                // sm.select(0);
            },
            disabled: true
        }],
        plugins: [ UserApp.config.Runtime.rowEdit],
  // viewConfig: {
  //       emptyText: 'Click a button to show a dataset',
  //       deferEmptyText: false
  //   }
    // afterRender:function() {
    //     console.log(' init after render view ');
    //     // call parent
    //     // Example.LinksPanel.superclass.afterRender.apply(this, arguments);
 
    //     // create links
    //     // this.tpl.overwrite(this.body, {links:this.links});
        
    // }, 
    
    initComponent:function(){         // var me = this; me.xtypesMap
                console.log(' init bgrid view ');
              this.store = Ext.create('UserApp.store.branch.Branch').load();   
       
        
        // this.cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        //     clicksToEdit: 2
        // });
        // this.plugins = this.cellEditing;
        
        this.callParent(arguments);
    }
});
