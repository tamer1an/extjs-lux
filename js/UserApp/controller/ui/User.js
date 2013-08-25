Ext.define('UserApp.controller.ui.User',{
    extend:'UserApp.core.Controller',

    views: ['panel.user.UserListPanel','grid.user.UserGrid' /*'form.user.CreateUser','form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm'*/],

    init: function() {
        console.log(' init User ctrl ');
    }
});
