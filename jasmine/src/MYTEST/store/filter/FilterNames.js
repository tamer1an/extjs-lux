/**
 * @description Store fore User model
 * @extends {MYTEST.core.Store}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.store.filter.FilterNames',{
    extend:'MYTEST.core.Store',
    model:'MYTEST.model.filter.FilterNames',
    alias: 'store.filterNames',
    storeId: 'FiltersNames',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url:'src/MYTEST/mockData/names.json',
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


