/**
 * @description Model representing a User object
 * @field {USR_UUNM_I} @type {string} UUName
 * @extends {EOMS.core.Model}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.model.filter.FilterNames',{
    extend: 'EOMS.core.Model',
    idProperty: 'uuName',
    
    fields:[{  // id field
       name: 'uuName',
       type: 'string',
       useNull : true
   }]
});
