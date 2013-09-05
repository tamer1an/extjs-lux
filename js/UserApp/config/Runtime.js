Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        userAuth : false   // initialize to false
    },
    sm: Ext.create('Ext.selection.CheckboxModel'),
    constructor: function(){
        console.log('init runtime');
    }
});