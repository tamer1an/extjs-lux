Ext.define('UserApp.store.User',{
    
    autoLoad: true,
    extend:'UserApp.core.Store',
    model:'User',
    alias: 'store.staff',
    // requires: [
    //     'UserApp.model.User'
    // ],
    
    storeId: 'Staff',
    restPath: '/api/staff',
     
    proxy: {
        type: 'ajax',
        url:'data.json',
        reader:{
            type:'json',
            successProperty:'success'
        },
        writer:{
            type:'json',
            writeAllFields:true,
            encode: false
        },
        autoSync:true,
    }
});


