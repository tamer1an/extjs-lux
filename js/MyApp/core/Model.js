/**
 * Base {@link Ext.data.Model} from which all other models will extend
 */
Ext.define('UserApp.core.Model',{
    extend: 'Ext.data.Model',
    
    /*
        fields: [
           // non-relational properties
           {
               name: 'CreatedDate',
               type: 'date',
               persist: false
           },
           {
               name: 'Active',
               type: 'boolean',
               defaultValue: true
           }
       ] 
   */
});

// REST
// read: /api/option/colors.json (GET)
// create: /api/option/colors.json (POST)
// update: /api/option/colors/{id}.json (PUT)
// delete: /api/option/colors/{id}.json (DELETE)