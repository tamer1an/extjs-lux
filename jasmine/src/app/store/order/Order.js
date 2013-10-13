/**
 * @description Store fore Role model
 * @extends {MYTEST.core.Store}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.store.order.Order',{
    extend:'MYTEST.core.Store',
    model:'MYTEST.model.order.Order',
    alias: 'store.Order',
    storeId: 'Role'
});


