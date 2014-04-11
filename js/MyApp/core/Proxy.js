/**
 * This class implements the data proxy event domain. All classes extending from 
 * {@link Ext.data.proxy.Proxy} are included in this domain. The selectors are simply
 * store id's or the wildcard "*" to match any store.
 *
 * @protected
 */
Ext.define('MmcApp.core.Proxy', {
    extend: 'Ext.app.EventDomain',
    singleton: true,
    requires: [
        'Ext.data.proxy.Server'
    ],
    type: 'proxy',
    idProperty: 'type',
    constructor: function() {
        var me = this;    
        me.callParent();
        me.monitor(Ext.data.proxy.Server);
    }
});