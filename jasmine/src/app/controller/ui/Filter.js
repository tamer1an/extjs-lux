/**
 * @namespace {MYTEST} namespace
 * @description {Displays user ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {MYTEST.core.Controller}
 *
 * @return {User}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.controller.ui.Filter',{
    extend:'MYTEST.core.Controller',
    views: [
         'form.filter.FilterCombo'
       , 'form.filter.Filter'
    ],
    init: function() {
        console.log('filter ctrl');
    }
});
