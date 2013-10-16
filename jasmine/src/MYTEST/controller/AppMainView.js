/**
 * @namespace {MYTEST} namespace
 * @description {Logic for branch, role, ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {MYTEST.core.Controller}
 *
 * @return {AppMainView}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.controller.AppMainView',{
    extend:'MYTEST.core.Controller',
    // stores: [
        //  ,'MYTEST.store.order.Order'
        //   'MYTEST.store.filter.FilterNames'
    // ],
    views: [
             'MYTEST.core.ButtonView'
            ,'MYTEST.core.ComboView'
            ,'MYTEST.core.TextfieldView'
            ,'MYTEST.core.WindowView'
            ,'MYTEST.core.ConfirmView'
        ,'Viewport'
        ,'AppMainView'
    ],
    config : {
        runtime:{},
        ajax:{},
        actionBtns:{},
        app: {}
    },
    listeners: {
        'disableAll-main-buttons': function() {
            this.buttonHelper(false,0);
            var app = this.getApp();

            app.getAddBranch()['disable']();
            app.getRemoveBranch()['disable']();

            app.getFilterForm().child('[name=firstName]').setReadOnly(true);
            app.getFilterForm().child('[name=lastName]').setReadOnly(true);
        }
    },
    buttonHelper: function(setBtnNames, mode){
        var docked        = this.getApp().getMFrame().getDockedComponent(1),
            dockedRuntime = this.getActionBtns();

        dockedRuntime.setMode(mode);
        dockedRuntime.setBtnNames(setBtnNames===false? dockedRuntime.getTplNames() : setBtnNames);

        docked.queryBy(dockedRuntime.toggleBtn);
    },
    confirmHelper: function(options){
        this.getApp().getCoreConfirm()
            .show(
                Ext.merge({
                    buttons: Ext.Msg.OKCANCEL,
                    icon: Ext.Msg.QUESTION,
                    scope:this
                }, options)
            );
    },
    init: function() {
        console.log('appmain');

        this.cfgSetup();
        this.control(this.getAppControls());
        this.addEvents(
            'active-main-buttons',
            'disableAll-main-buttons',
            'save-reset-change'
        );
    },
    getAppControls:function(){
        return {  };
    },
    cfgSetup: function(){
        this.setApp(this.application);
        this.setRuntime(MYTEST.config.Runtime);
        this.setAjax(MYTEST.config.Runtime.ajax);
        this.setActionBtns(MYTEST.config.Runtime.mainDockedItems);
    }
});