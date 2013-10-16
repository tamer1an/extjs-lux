/**
 * @namespace {MYTEST} namespace
 * @description {Displays and populate FilterForm after search results}
 * @extends  {MYTEST.core.FormView}
 *
 * @return {UserCombo}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.form.filter.Filter',{
    extend: 'MYTEST.core.FormView',
    alias: ['widget.nsMYTEST.filter.FilterForm','widget.fForm'],
    padding:'10',
    fieldLabel: '',
    itemId: 'FilterForm',
    defaultType: 'coreTxtF',
    defaults:{readOnly: true},

    initComponent:function(){
        this.items=[ {

        }];
        this.callParent(arguments);
    }
});