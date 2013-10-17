/**
 * @namespace {MYTEST} namespace
 *
 * @return {TestListPanel}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.panel.test.TestListPanel',{
    extend: 'MYTEST.core.PanelView',
    alias: ['widget.nsMYTEST.test.TestListPanel','widget.tList'],
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
