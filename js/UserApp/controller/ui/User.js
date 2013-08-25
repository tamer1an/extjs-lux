Ext.define('UserApp.controller.ui.User',{
    extend:'UserApp.core.Controller',

    views: ['form.user.CreateUser','form.user.UserMaintainceSwitch','form.user.ChangePasswordConfirm'],

    init: function() {
        console.log(' init User ctrl ');
    }
});
