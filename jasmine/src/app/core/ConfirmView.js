/**
 * Base {@link Ext.window.Window} from which all other windows will extend
 * @extends  {Ext.window.Window}
 * @description {Proxy class for all Windows in application}
 *
 * @return {Window}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.ConfirmView', {
    extend: 'Ext.window.MessageBox',
    alias: ['widget.nsEOMS.core.ConfirmView', 'widget.coreConfirm']

//    buttons: Ext.Msg.OKCANCEL,
//    icon: Ext.Msg.QUESTION,
//
//    initComponent: function(){
//        this.callParent(arguments);
//    }
});