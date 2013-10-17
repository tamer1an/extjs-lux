/**
 * @namespace {MYTEST} namespace
 * @description {Displays}
 * @extends  {MYTEST.core.PanelView}
 *
 * @return {UserCombo}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.form.filter.FilterCombo',{
    extend: 'MYTEST.core.ComboView',
    alias: ['widget.nsMYTEST.filter.FilterCombo','widget.SelectFilterCombo'],
    store: 'MYTEST.store.filter.FilterNames',
    queryMode: 'local',

    fieldLabel: 'Filters:',
    emptyText:'Please select filter',
    padding: '0 10px 0 10px',
    width: 373,

    displayField: 'uuName',
    valueField: 'uuName',

    anyMatch:true,
    editable: true,
    typeAhead: true,
    minChars: 1,
    selectOnFocus:true,
    action:'mainFilter',
    listeners: {
        'afterrender': function () {
            this.focus(false, 300);
        }
    },

//    autoSelect: false,
//    forceSelection: true,
//    hideTrigger:true, // textfild/dropdown style

    initComponent:function(){
        console.log('combo')
        this.callParent(arguments);
    }
});
