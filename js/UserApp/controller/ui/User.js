Ext.define('UserApp.controller.ui.User',{
    extend:'UserApp.core.Controller',
    // stores: ['user.User'],
    // models: ['user.User'],

    /* 'form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm' */
    views: ['panel.user.UserListPanel', 'grid.user.UserGrid', 'window.user.AddUserWindow'],

    // refs: [{
    //    ref: 'AddUser',
    //    selector: '[xtype=userMGMT.user.form.User]'
    // }],

    init: function() {
        console.log(' init uctrl ');
    }
});
