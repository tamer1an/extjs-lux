Ext.define('UserApp.controller.ui.Role',{
    extend:'UserApp.core.Controller',

    views: ['panel.role.RoleListPanel','grid.role.RoleGrid' /*'form.user.CreateUser','form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm'*/],

    init: function() {
        console.log(' init Role ctrl ');
    }
});
