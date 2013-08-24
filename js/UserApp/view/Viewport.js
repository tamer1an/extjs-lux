
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