/**
 * @namespace {MYTEST} namespace
 *
 * @return {RoleListPanel}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.panel.order.OrderListPanel',{
    extend: 'MYTEST.core.PanelView',
    alias: ['widget.nsMYTEST.order.OrderListPanel','widget.oList'],
    layout: 'anchor',
    bodyPadding: 10,

    items: [{
        xtype: 'nsMYTEST.order.OrderGrid'
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
