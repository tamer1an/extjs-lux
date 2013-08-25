Ext.define('UserApp.controller.AppMainView',{
    extend:'UserApp.core.Controller',

    views: ['AppMainView'],
    
    // requires: [
        
    // ],
    
    /* REFS
        views: [
            'layout.Menu',
            'layout.Center',
            'layout.Landing'
        ],
        refs: [
            {
                ref: 'Menu',
                selector: '[xtype=layout.menu]'
            },
            {
                ref: 'CenterRegion',
                selector: '[xtype=layout.center]'
            }
        ]
        
        // : getMenu(), getCenterRegion()
    */

    init: function() {
        console.log(' init UserMGMTPanelMain  ctrl 1');
    }
});
