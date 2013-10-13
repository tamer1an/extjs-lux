/** Application domain model
 *  @namespace {EOMS} namespace
 * 
 *   Ext.Loader.setConfig({
 *      enabled: true,
 *       disableCaching: false,
 *       paths: {UsersApp: 'app', Ext: 'ext-4.1.0'}
 *   });
 *
 *  @constructs {EOMS.config.Runtime.constructor()}
 *  @interface {EOMS.config.Runtime.getSomeValue()}
 *  @optional Runtime.setupApplication: function(){ // }, to add extra control or use Runtime
 *  @return EOMS
 *
 *  @description { Main application controller and mainframe ui-interface }
 *  @author {Andrii Trybynenko}
 */
Ext.application({
    autoCreateViewport: true,
    name:'EOMS',
    appFolder:'src/EOMS',
    requires : ['EOMS.config.Runtime'],
    controllers:[
        'AppMainView'
       ,'ui.Order'
       ,'ui.Filter'
    ],
    refs: [{
        ref:       'CorePopup',
        selector:  'EOMS.core.WindowView',
        xtype:     'coreWindow',
        autoCreate:true,
        modal:     true,
        draggable: true,
        resizable: false
    },{
        ref:       'CoreConfirm',
        selector:  'EOMS.core.ConfirmView',
        xtype:     'coreConfirm',
        autoCreate:true
    },{
        ref:       'MFrame',       // main app frame panel
        selector:  '#mainFrame'
    },{
        ref:       'MainFilter',   // user search combobox
        selector:  '[action=mainFilter]'
    },{
        ref:       'FilterForm',     // user form
        selector:  'fForm'
    },{
        ref:       'AddOrder',      // add user button
        selector:  'button[action=createOrderWindow]'
    },{
        ref:       'OGrid',        // role grid
        selector:  'oGrid'
    }]
    ,launch: function(){
        console.log('app lunch');
        this.runtime = EOMS.config.Runtime;
    }
});