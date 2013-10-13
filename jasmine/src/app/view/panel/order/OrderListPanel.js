/**
 * @namespace {EOMS} namespace
 *
 * @return {RoleListPanel}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.view.panel.order.OrderListPanel',{
    extend: 'EOMS.core.PanelView',
    alias: ['widget.nsEOMS.order.OrderListPanel','widget.oList'],
    layout: 'anchor',
    bodyPadding: 10,

    items: [{
        xtype: 'nsEOMS.order.OrderGrid'
    }],
        
    initComponent:function(){
        console.log('init pannel')
        this.title = this.getAppTitle(),

        this.callParent(arguments);
    },
    getAppTitle:function(){
        return 'Orders';
    }
});
