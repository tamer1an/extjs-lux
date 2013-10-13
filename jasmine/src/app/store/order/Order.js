/**
 * @description Store fore Role model
 * @extends {EOMS.core.Store}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.store.order.Order',{
    extend:'EOMS.core.Store',
    model:'EOMS.model.order.Order',
    alias: 'store.Order',
    storeId: 'Role'
});


