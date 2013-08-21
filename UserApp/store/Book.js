Ext.define('UserApp.store.Book',{
    autoLoad: true,
    extend:'Ext.data.Store',
    model:'App.model.Books',
    proxy: {
        type: 'ajax',
        url:'data/books.json',
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