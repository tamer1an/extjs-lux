//Ext.require(
//    'UserApp.controller.ui.AcePanelMain' ,
//    function(e){
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: document.getElementById('User-App'),
            items: [
                {
                    region: 'center',
                    xtype: 'panel',
                    title: 'ACE Menu - User Maintenance',
                    layout: 'anchor',

                    tools: [
                        {
                            xtype: 'tool',
                            type: 'gear'
                        }
                    ],
                    items:[
                        {
                            xtype: 'widget.UserMGMT.PanelMain' ,
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
//});
