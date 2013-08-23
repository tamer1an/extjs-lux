Ext.define('UserApp.store.User',{
    
    autoLoad: true,
    extend:'Ext.data.Store',
    model:'User',
    
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
        autoSync:true

    }

});