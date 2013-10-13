/**
 * @description Model representing a ENTITLEMENT object
 * @field {APF_I} @type {string} UUName
 * @field {NAME} @type {string} Status
 * @field {DESCRIPTION}  @type {string} First Name
 * @extends {EOMS.core.Model}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.model.order.Order',{
    extend: 'EOMS.core.Model',
    idProperty: 'id',
    
    fields:[{     // id field
       name: 'id',
       type: 'int',
       useNull : true
   },{    // simple values
       name: 'name',
       type: 'string'
   },{
       name: 'description',
       type: 'string'
   },{
       name: 'assigned',
       type: 'boolean',
       defaultValue: true
   }],

   belongsTo: 'User'
});
