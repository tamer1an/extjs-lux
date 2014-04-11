Ext.define('UserApp.store.branch.Branch',{
    
    extend:'UserApp.core.Store',
    model:'UserApp.model.branch.Branch',
    alias: 'store.branch',
    storeId: 'Branches',
    autoLoad: true,
    
    requires: [
        'UserApp.model.branch.Branch'
    ],
    
    remoteFilter: true,
    remoteSort: true,
            
    proxy: {
        type: 'ajax',  // type: 'rest','ajax'
        url:'branch.json',
        reader:{
            type:'json',
            successProperty:'success',
            root: 'data',
            totalProperty: 'count'
        },
        writer:{
            type:'json',
            writeAllFields:true,
            encode: false
        },
        autoSync:true,
    }
});


