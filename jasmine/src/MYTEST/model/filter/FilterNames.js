/**
 * @description Model representing a User object
 * @field {USR_UUNM_I} @type {string} UUName
 * @extends {MYTEST.core.Model}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.model.filter.FilterNames',{
    extend: 'MYTEST.core.Model',
    idProperty: 'uuName',
    
    fields:[{  // id field
       name: 'uuName',
       type: 'string',
       useNull : true
   }]
});
