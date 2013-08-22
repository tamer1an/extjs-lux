// Ext.require('Ext.container.Viewport');

Ext.application({
    name:'UserApp',
    appFolder:'UserApp', 
    
    // autoCreateViewport : true,    
   // models: ['User'],
   
                controllers:[
                    'ui.LoginForm',
                    'ui.ChangePassAfterUserLogin',
                    'ui.AcePanelMain',
                    'ui.UserMaintainceSwitch',
                    'ui.AddNewBranch',
                    'ui.BranchDetails',
                    'ui.CreateNewUser',
                    'ui.ChangePasswordConfirm',
                    'ui.TemporaryPassword'
                ],

                launch: function(){
                    console.log(' launch ');

                    Ext.create('Ext.container.Viewport', {
                        layout: 'border',
                        renderTo: document.getElementById('User-App'),
                        items: [
                            {
                                region: 'center',
                                xtype: 'panel',
                                title: 'ACE Menu - User Maintenance',
                                layout: 'anchor',
                                items:[
                                    {
                                      xtype: 'UserMGMTLoginForm' ,
                                      anchor: '100% 100%'
                                    }
                                ]
                            }]
                    });
    }
});

// var app = UserApp.getApplication();
