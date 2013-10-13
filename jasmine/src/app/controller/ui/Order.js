/**
 * @namespace {eoms} namespace
 * @description {Displays role ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {eoms.core.Controller}
 *
 * @return {Role}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.controller.ui.Order',{
    extend:'EOMS.core.Controller',
    views: ['panel.order.OrderListPanel','grid.order.OrderGrid'],
    init: function() {
        console.log('order ctrl');
    }
});
