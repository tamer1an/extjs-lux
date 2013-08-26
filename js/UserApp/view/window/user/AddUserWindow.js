Ext.define('UserApp.view.window.user.AddUserWindow', {
    extend: 'UserApp.core.WindowView',
    alias: 'widget.UserMGMT.AddUserWindow',
    requires: ['UserApp.view.form.user.CreateUser'],
    
    // iconCls: 'icon_user',
    width: 600,
    modal: true,
    resizable: true,
    draggable: true,
    // constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [{
                xtype: 'UserMGMT.CreateUser'
            }],
            // dockedItems: [{
            //     xtype: 'toolbar',
            //     dock: 'bottom',
            //     ui: 'footer',
            //     items: [
            //         {
            //             xtype: 'button',
            //             itemId: 'cancel',
            //             text: 'Cancel',
            //             iconCls: 'icon_delete'
            //         },
            //         '->',
            //         {
            //             xtype: 'button',
            //             itemId: 'save',
            //             text: 'Save',
            //             iconCls: 'icon_save'
            //         }
            //     ]
            // }]
        });
        
        // in.down( 'form' ).loadRecord( record );
        
        me.callParent( arguments );
    }
});