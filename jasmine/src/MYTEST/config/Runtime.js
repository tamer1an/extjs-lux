/** Application domain model
 *  @namespace {MYTEST} namespace
 *
 */
Ext.define('MYTEST.config.Runtime',{
    requires : ['MYTEST.config.action.MainDockedItems'],
    singleton : true,
    getUserAuth: function () {return true},
    config : {
        editMode: false
//       , editModeHandler : {
//            url: 'accessModeService/get',
//            success: function(response){
//                var jsonResponse = Ext.decode(response.responseText);
//                this.setEditMode(jsonResponse.writeModeEnabled);
//            }
//        }
    }
    //    sm: Ext.create('Ext.selection.CheckboxModel'),
    , mainDockedItems:  Ext.create('MYTEST.config.action.MainDockedItems')
    , ajax:             Ext.create('MYTEST.core.Ajax'),

//  , rowEdit:          Ext.create('Ext.grid.plugin.RowEditing', {
//      clicksToMoveEditor: 1,
//      autoCancel: false,
//      listeners : {
//          beforeedit : function(ev) {
//              return MYTEST.config.Runtime.getEditMode();
//          }
//      }
//  }),
    constructor: function(){

    }
});