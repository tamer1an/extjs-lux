Ext.define('UserApp.store.user.User',{  
    extend:'UserApp.core.Store',
    model:'UserApp.model.user.User',
    alias: 'store.user',
    storeId: 'Users',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url:'users.json',
        reader:{
            type:'json',
            successProperty:'success'
        },
        writer:{
            type:'json',
            writeAllFields:true,
            encode: false
        }//,  autoSync:true,
    }
});


