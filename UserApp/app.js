Ext.require('Ext.container.Viewport');

Ext.application({
    name:'UserApp',
    appFolder:'UserApp',   
    // autoCreateViewport : true,	
    controllers:['UserApp.controller.ui.LoginForm'],
		
	init: function(){ console.log(' init app '); },		
	
    launch: function(){
		console.log(' launch ');
    }
});

// var app = UserApp.getApplication();
