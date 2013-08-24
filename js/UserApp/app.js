//Ext.Loader.setConfig({ enabled: true });

Ext.onReady(function() {
    // Ext.QuickTips.init();

    Ext.application({
        name:'UserApp',
        appFolder:'../js/UserApp',
        
        // Example 5C. Sample Runtime.js file to hold global properties for an app.
        // requires : ['UserApp.config.Runtime'], UserApp.config.setSomeValue(12345); MyApp.config.getSomeValue();
        
        // autoCreateViewport : true,    // Ext.create( "UserApp.view.Viewport",this); 

        // models: ['User'],
        controllers:[
            'AppMainView'
//            'ui.LoginForm',
//            'ui.ChangePassAfterUserLogin',
//            'ui.UserMaintainceSwitch',
//            'ui.AddNewBranch',
//            'ui.BranchDetails',
//            'ui.CreateNewUser',
//            'ui.ChangePasswordConfirm',
//            'ui.TemporaryPassword'
        ],
        launch: function(){           
            console.log(' launch ');  //TODO: TrybynenkoA: AJAX AUTH CALL // this.auth  // additinal object info structure

            Ext.create('Ext.container.Viewport', {
                // layout: 'border',
                layout: 'fit',
                renderTo: document.getElementById('User-App'),
                items: [
                    {
                        region: 'center',
                        xtype: 'panel',
                        title: 'User+',
                        layout: 'anchor',
                        tools: [
                            {
                                xtype: 'tool',
                                type: 'gear'
                            }
                        ],
                        items:[
                            {
                                xtype: 'UserMGMT.AppMainView' ,
                                anchor: '100% 100%'  //anchor: '-150 100%'
                            }
                        ],
                        dockedItems: [
                            {
                                xtype: 'toolbar',
                                dock: 'bottom',
                                items: [
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        text: 'Save Changes'
                                    },'-',
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        text: 'Reset Changes'
                                    },'-',
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        text: 'Reset Password'
                                    },'-',
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        text: 'Disable User'
                                    },'-',
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        text: 'Delete User'
                                    }
                                ]
                            }
                        ]
                    }]
            });
        }
    });

});