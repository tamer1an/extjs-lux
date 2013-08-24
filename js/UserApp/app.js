//Ext.Loader.setConfig({ enabled: true });

Ext.onReady(function() {

    Ext.application({
        name:'UserApp',
        appFolder:'../js/UserApp',

        controllers:[
            'ui.PanelMain'
        ],
        launch: function(){  //            Ext.create( "UserApp.view.Viewport",this);
            console.log(' launch ');  

            Ext.create('Ext.container.Viewport', {
                layout: 'border',
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
                                xtype: 'UserMGMTPanelMain' ,
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