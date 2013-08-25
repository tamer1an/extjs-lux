/**
 * Base {@link Ext.window.Window} from which all other panels-views will extend
 */
Ext.define('UserApp.core.WindowView', {
    extend: 'Ext.window.Window',
    // alias: 'widget.staff.edit.window',
    // requires: [
    //     'CarTracker.view.staff.edit.Form'
    // ],
    // iconCls: 'icon_user',
    // width: 600,
    // modal: true,
    // resizable: true,
    // draggable: true,
    // constrainHeader: true,
    // layout: 'fit',
    // initComponent: function() {
    //     var me = this;
    //     Ext.applyIf(me, {
    //         items: [
    //             {
    //                 // include form
    //                 xtype: 'staff.edit.form'
    //             }
    //         ],
    //         dockedItems: [
    //             {
    //                 xtype: 'toolbar',
    //                 dock: 'bottom',
    //                 ui: 'footer',
    //                 items: [
    //                     {
    //                         xtype: 'button',
    //                         itemId: 'cancel',
    //                         text: 'Cancel',
    //                         iconCls: 'icon_delete'
    //                     },
    //                     '->',
    //                     {
    //                         xtype: 'button',
    //                         itemId: 'save',
    //                         text: 'Save',
    //                         iconCls: 'icon_save'
    //                     }
    //                 ]
    //             }
    //         ]
    //     });
    //     me.callParent( arguments );
    // }
});
