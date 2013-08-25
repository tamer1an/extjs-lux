Ext.define('UserApp.store.user.User',{
    
    extend:'UserApp.core.Store',
    model:'UserApp.model.user.User',
    alias: 'store.user',
    storeId: 'Users',
    autoLoad: true,
    
    requires: [
        'UserApp.model.user.User'
    ],
            
    proxy: {
        type: 'ajax',
        url:'user.json',
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


