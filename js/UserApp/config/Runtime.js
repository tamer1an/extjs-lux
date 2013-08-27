Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        userAuth : false   // initialize to false
    },
    constructor: function(){
        console.log('init runtime');
    }
});