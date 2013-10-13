/** Application domain model
 *  @namespace {MYTEST} namespace
 *
 *  @static getEditMode()
 *  @return Runtime
 *
 *  @description { Main place to store global variables, init additional Frameworks(ACE)
 *  and runtime logic application }
 *  @author {Andrii Trybynenko}
 *
 */
Ext.define('MYTEST.config.Runtime',{
    requires : ['MYTEST.config.action.MainDockedItems'],
    singleton : true,
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