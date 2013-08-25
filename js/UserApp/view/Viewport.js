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

// var panel = Ext.create('Ext.panel.Panel', {
//         title : 'Моя панель', 
//         width : 900,
//         height: 600,
//         renderTo : 'test',
//         layout : 'border',
//         defaults : {
//             padding: '3'
//         },
//         items  : [{
//             xtype : 'panel',
//             region: 'west',
//             title : 'Вложенная первая',
//             html  : 'контент контент контент ',
//             tbar: [
//               { xtype: 'button', text: 'Button 1' }
//             ]
//         },{
//             xtype : 'panel',
//             region: 'center',
//             title : 'Вложенная вторая',
//             html  : 'контент контент контент ',
//             bbar: [
//               { xtype: 'button', text: 'Button 2' },
//               { xtype: 'button', text: 'Button 3' }
//             ],
//                         lbar: [
//                           button
//                         ]
//         },{
//             xtype : 'tabpanel',
//             region: 'south',
//             height: 200,
//             title : 'Таб панель',
//             items : [{
//                 title : 'Первая вкладка',
//                 html  : 'Контент первой вкладки'
//             },{
//                 title : 'Вторая вкладка',
//                 html  : 'Контент второй вкладки'
//             }]
//         }] 
//    });