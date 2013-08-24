<<<<<<< HEAD
=======
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
                    title: 'widget.UserMGMT.PanelMain',
                    layout: 'anchor',
>>>>>>> b21af2d39d8de3c37b39988e72b4659ab860b1b8

Ext.create('Ext.container.Viewport', {
    layout: 'border',
    renderTo: document.getElementById('User-App'),
    items: [
        {
            region: 'center',
            xtype: 'panel',
            title: '',
            layout: 'anchor',

            tools: [
                {
                    xtype: 'tool',
                    type: 'gear'
                }
            ],
            items:[
                {
                    xtype: '' ,
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
                            text: 'Save '
                        },'-',
                        {
<<<<<<< HEAD
                            xtype: 'button',
                            disabled: true,
                            text: 'Reset '
                        },'-',
                        {
                            xtype: 'button',
                            disabled: true,
                            text: 'Reset '
                        },'-',
                        {
                            xtype: 'button',
                            disabled: true,
                            text: 'Disable '
                        },'-',
                        {
                            xtype: 'button',
                            disabled: true,
                            text: 'Delete '
                        }
                    ]
                }
            ]
        }]
});
=======
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
                                    text: 'Save '
                                },'-',
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    text: 'Reset '
                                },'-',
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    text: 'Reset '
                                },'-',
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    text: 'Disable '
                                },'-',
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    text: 'Delete '
                                }
                            ]
                        }
                    ]
                }]
        });
//});
>>>>>>> b21af2d39d8de3c37b39988e72b4659ab860b1b8
