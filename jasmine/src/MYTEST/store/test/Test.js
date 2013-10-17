/**
 * @description Store fore Role model
 * @extends {MYTEST.core.Store}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.store.test.Test',{
    extend:'MYTEST.core.Store',
    model:'MYTEST.model.test.Test',
    alias: 'store.Order',
    storeId: 'Role'
});


