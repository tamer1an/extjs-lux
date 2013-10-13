/**
 * @namespace {EOMS} namespace
 * @description {Displays application user, branch, role ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {EOMS.core.PanelView}
 *
 * @return {AppMainView}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.view.AppMainView',{
    extend: 'EOMS.core.PanelView',
    alias: ['widget.nsEOMS.AppMainView','widget.main'],
    defaults:{ collapsible: true }, //frame:true
    height: 1200,
    autoScroll:true,

    initComponent:function(){
         console.log('init appmainView')

        this.items = [{
            xtype:'nsEOMS.core.Panel',
            border: false,
            layout: {
                type: 'fit',
                align: 'left'
            },
            title: this.getAppTitle(),
            tbar:  this.getAppTools(),
            items: [{xtype: 'nsEOMS.filter.FilterForm'}]
        }
        ,{
            xtype: 'nsEOMS.order.OrderListPanel'
        }
        ];

        this.callParent(arguments);
    },
    getAppTitle: function() {
        return 'Search';
    },
    getAppTools: function() {
       return [{
           xtype: 'nsEOMS.filter.FilterCombo'
       },'->','-',{
           xtype   :'coreBtn',
           action  :"createOrderWindow",
           disabled: !EOMS.config.Runtime.getEditMode(),
           text    : 'Add New Order'
       }];
    }
});