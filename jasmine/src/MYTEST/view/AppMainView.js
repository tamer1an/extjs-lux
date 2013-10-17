/**
 * @namespace {MYTEST} namespace
 * @description {Displays application user & ui-interface e.t.c.}
 * @memberOf {Ext.app.Controller}
 * @extends  {MYTEST.core.PanelView}
 *
 * @return {AppMainView}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.AppMainView',{
    extend: 'MYTEST.core.PanelView',
    alias: ['widget.nsMYTEST.AppMainView','widget.main'],
    defaults:{ collapsible: true }, //frame:true
    height: 1200,
    autoScroll:true,

    initComponent:function(){
         console.log('init appmainView')

        this.items = [{
            xtype:'nsMYTEST.core.Panel',
            border: false,
            layout: {
                type: 'fit',
                align: 'left'
            },
            title: this.getAppTitle(),
            tbar:  this.getAppTools(),
          
        }];
        this.callParent(arguments);
    },
    getAppTitle: function() {
        return 'Search';
    },
    getAppTools: function() {
       return ['->','-',{
           xtype   :'coreBtn',
           action  :"createOrderWindow",
           disabled: !MYTEST.config.Runtime.getEditMode(),
           text    : 'Add New(+)'
       }];
    }
});