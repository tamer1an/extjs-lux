/**
 * @description Store fore User model
 * @extends {EOMS.core.Store}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.store.filter.FilterNames',{
    extend:'EOMS.core.Store',
    model:'EOMS.model.filter.FilterNames',
    alias: 'store.filterNames',
    storeId: 'FiltersNames',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url:'src/EOMS/mockData/names.json',
        actionMethods: {
            create : 'POST',
            read   : 'GET',
            update : 'POST',
            destroy: 'POST'
        },
        reader:{
            type:'json',
            root: 'userNames',
            successProperty:'success'
        },
        writer:{
            type:'json',
            writeAllFields:true,
            encode: false
        }
    }
});


