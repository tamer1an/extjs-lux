/**
 * @namespace {EOMS} namespace
 * @description {Displays and populate FilterForm after search results}
 * @extends  {EOMS.core.FormView}
 *
 * @return {UserCombo}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.view.form.filter.Filter',{
    extend: 'EOMS.core.FormView',
    alias: ['widget.nsEOMS.filter.FilterForm','widget.fForm'],
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