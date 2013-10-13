/** Application domain model
 *  @namespace {EOMS} namespace
 *
 *  @static getEditMode()
 *  @return Runtime
 *
 *  @description { Main place to store global variables, init additional Frameworks(ACE)
 *  and runtime logic application }
 *  @author {Andrii Trybynenko}
 *
 */
Ext.define('EOMS.config.Runtime',{
    requires : ['EOMS.config.action.MainDockedItems'],
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
    , mainDockedItems:  Ext.create('EOMS.config.action.MainDockedItems')
    , ajax:             Ext.create('EOMS.core.Ajax'),

//  , rowEdit:          Ext.create('Ext.grid.plugin.RowEditing', {
//      clicksToMoveEditor: 1,
//      autoCancel: false,
//      listeners : {
//          beforeedit : function(ev) {
//              return EOMS.config.Runtime.getEditMode();
//          }
//      }
//  }),
    constructor: function(){

    }
});