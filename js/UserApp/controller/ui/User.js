Ext.define('UserApp.controller.ui.User',{
    extend:'UserApp.core.Controller',
    // stores: ['user.User'],
    // models: ['user.User'],
     
    views: ['panel.user.UserListPanel', 'grid.user.UserGrid', 'window.user.AddUserWindow' /* 'form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm' */],

    init: function() {
        console.log(' init User ctrl ');
    }
});
