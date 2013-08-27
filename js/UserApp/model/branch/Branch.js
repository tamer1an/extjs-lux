/**
 * Model representing a Color object
 */
Ext.define('UserApp.model.branch.Branch',{
    extend: 'UserApp.core.Model',
    // idProperty: 'BranchID',
    
    idProperty: 'ColorID',
       fields: [
           // id field
           {
               name: 'ColorID',
               type: 'int',
               useNull : true
           },
           // simple values
           {
               name: 'LongName',
               type: 'string'
           },
           {
               name: 'ShortName',
               type: 'string'
           },
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
 
});
