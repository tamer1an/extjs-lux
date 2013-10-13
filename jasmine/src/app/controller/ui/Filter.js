/**
 * @namespace {EOMS} namespace
 * @description {Displays user ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {EOMS.core.Controller}
 *
 * @return {User}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.controller.ui.Filter',{
    extend:'EOMS.core.Controller',
    views: [
         'form.filter.FilterCombo'
       , 'form.filter.Filter'
    ],
    init: function() {
        console.log('filter ctrl');
    }
});
