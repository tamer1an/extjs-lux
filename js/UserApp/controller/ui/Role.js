Ext.define('UserApp.controller.ui.Role',{
    extend:'UserApp.core.Controller',

    /*'form.user.CreateUser','form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm'*/
    views: ['panel.role.RoleListPanel','grid.role.RoleGrid'],

    init: function() {
        console.log(' init Rctrl ');
    }
});
