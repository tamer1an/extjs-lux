/**
 * @namespace {MYTEST} namespace
 * @description {Displays role ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {MYTEST.core.Controller}
 *
 * @return {Role}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.controller.ui.Order',{
    extend:'MYTEST.core.Controller',
    views: ['panel.order.OrderListPanel','grid.order.OrderGrid'],
    init: function() {
        console.log('order ctrl');
    }
});
