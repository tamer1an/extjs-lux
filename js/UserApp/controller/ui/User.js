Ext.define('UserApp.controller.ui.User',{
    extend:'UserApp.core.Controller',
    // stores: ['user.User'],
    // models: ['user.User'],
     
    views: ['panel.user.UserListPanel', 'grid.user.UserGrid', 'window.user.AddUserWindow' /* 'form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm' */],


      // refs: [
      //       {
      //           ref: 'CarList',
      //           selector: '[xtype=car.list]'
      //       },
      //       {
      //           ref: 'CarEditWindow',
      //           selector: '[xtype=car.edit.window]'
      //       },
      //       {
      //           ref: 'CarEditForm',
      //           selector: '[xtype=car.edit.form]'
      //       },
      //       {
      //           ref: 'CarSearchWindow',
      //           selector: '[xtype=car.search.window]'
      //       },
      //       {
      //           ref: 'CarSearchForm',
      //           selector: '[xtype=car.search.form]'
      //       }
      //   ],
        
    init: function() {
        console.log(' init User ctrl ');
        
        // this.listen({
        //     controller: {},
        //     component: {
        //        'grid[xtype=car.list] button#search': {
            //         click: this.showSearch
            //     },
            //     'grid[xtype=car.list] button#clear': {
            //         click: this.clearSearch
            //     },
            //     'window[xtype=car.search.window] button#search': {
            //         click: this.search
            //     },
            //     'window[xtype=car.search.window] button#cancel': {
            //         click: this.close
            //     }
            // 'form[xtype=car.edit.form] combobox[name=Make]': {
            //     change: this.filterModel
            // },
            // 'form[xtype=car.edit.form] combobox[name=Model]': {
            //     beforequery: this.checkMake
            // }
        //     },
        //     global: {},
        //     store: {},
        //     proxy: {} 
        // });
        
        
    }
});
