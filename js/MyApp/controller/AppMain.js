/**
 * @namespace {MmcApp} namespace
 * @description {Logic for dashboard}
 * @memberOf {Ext.app.Controller}
 * @extends  {MmcApp.core.Controller}
 *
 * @return {AppMain}
 * @author {Andrii Trybynenko}
 */
Ext.define('MmcApp.controller.AppMain',{
    extend:'MmcApp.core.Controller',   
	// stores: [      
        // ,'MmcApp.store.mmc...'
    // ],
    models: ['MmcApp.model.mmc.Mmc'],
    views: [
             'MmcApp.core.Panel'
            ,'MmcApp.core.Window'
            ,'MmcApp.core.Confirm'            
        ,'Viewport'
    ],
    config: {
        ajax:{},
		confirmHelper: function(options){
			this.getApplication().getCoreConfirm()
				.show(
					Ext.merge({
						buttons: Ext.Msg.OKCANCEL,
						icon: Ext.Msg.QUESTION,
						scope:this
					}, options)
				);
		}
    },    
    init: function() {
        this.setAjax(this.getApplication().getRuntime().ajax);
		this.listen({
            controller: {
                '*': {        // '*' means any controller
                    doSomethingElse: function(){
						alert('any of controllers fire doSomethingElse event.');
					}	
                }
            }
			,component: {}
            ,global: {}
            ,store: {}
            ,proxy: { // A place to control store proxy events, its added functionality by MmcApp.core.Proxy class and required in app.js
				'#rest': {
					exception: function( proxy, response, operation, eOpts ) {
						alert( 'Danger! We had a proxy error!' );
					}
				}
			}
        });	
		// this.control(this.getAppControls());		
    }
    // , getAppControls:function(){
        // return { };
    // }
}); 