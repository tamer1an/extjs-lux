Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        someValue : 0   // initialize to 0
    },
    constructor : function(config){
        this.initConfig(config);
    }
});