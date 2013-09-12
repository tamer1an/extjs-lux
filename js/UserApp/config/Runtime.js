Ext.define('UserApp.config.Runtime',{
    singleton : true,
    config : {
        userAuth : false   // initialize to false
    },
    sm: Ext.create('Ext.selection.CheckboxModel'),
    rowEdit:  Ext.create('Ext.grid.plugin.RowEditing', {
                 clicksToMoveEditor: 1,
                 autoCancel: false
              }),
    constructor: function(){
        console.log('init runtime');
    }
});