Ext.define('UserApp.store.role.Role',{
    extend:'UserApp.core.Store',
    model:'UserApp.model.role.Role',
    alias: 'store.role',
    storeId: 'Role',
    autoLoad: true,

    requires: [
        'UserApp.model.role.Role'
    ],
            
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
        }
    }
});


