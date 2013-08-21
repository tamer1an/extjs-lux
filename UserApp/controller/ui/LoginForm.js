Ext.define('UserApp.controller.ui.LoginForm',{
    extend:'Ext.app.Controller',
    model: ['User'],
    
    views: ['form.LoginForm'],

    init: function() {
    	console.log(' init ctrl ');
    }
});
