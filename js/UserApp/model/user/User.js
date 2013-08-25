/**
 * Model representing a Color object
 */
Ext.define('UserApp.model.user.User',{
    extend: 'UserApp.core.Model',
    idProperty: 'UserID',
    
    fields:[ 
       // id field
       {
           name: 'UserID',
           type: 'int',
           useNull : true
       },
       
       // simple values
       {
           name: 'Login',
           type: 'string'
       },
       {
           name: 'FisrtName',
           type: 'string'
       },
       {
           name: 'LastName',
           type: 'string'
       },
       {
           name: 'Password',
           type: 'string'
       }
       /*,
       {
           name: 'CreatedDate',
           type: 'date',
           persist: false
       },
       {
           name: 'Active',
           type: 'boolean',
           defaultValue: true
       }*/
    ]
});
