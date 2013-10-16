/** Application domain model
 *  @namespace {MYTEST} namespace
 *
 *  @static config : {
 *       modeArr:['disable','enable'],
 *       mode:0,
 *       tplNames:["saveUser","resetChanges","resetPassword","disableUser","deleteUser"],
 *       btnNames:[]
 *   }
 *  @return MainDockedItemsActions
 *
 *  @description { Main place to store docked items logic }
 *  @author {Andrii Trybynenko}
 *
 */
Ext.define('MYTEST.config.action.MainDockedItems',{
    config : {
        modeArr:['disable','enable'],
        mode:0,
        tplNames:["MYTESTReport","MYTESTImport","MYTESTExport","MYTESTGUISave"],
        btnNames:[]
    },
    toggleBtn :  function(btn){
        var runtime = MYTEST.config.Runtime,
            docked = runtime.mainDockedItems,
            modeAction, mode, list;

        if (!runtime.getEditMode()) {
            modeAction = 'disable',
            list = docked.getTplNames();
        } else {
            mode = docked.getMode();
            list = docked.getBtnNames().length > 0 ? docked.getBtnNames() : docked.getTplNames();
            modeAction = docked.getModeArr()[mode];
        }

        if (Ext.Array.indexOf(list,btn.getItemId()) !== -1)
            btn[modeAction]();
    }
});
