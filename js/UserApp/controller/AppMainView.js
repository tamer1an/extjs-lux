/**
 * Displays application structure
 * @memberOf {Ext.app.Controller}
 * @extends  {UserApp.core.Controller}
 */

Ext.define('UserApp.controller.AppMainView',{
    extend:'UserApp.core.Controller',
    views: ['AppMainView'],
    
    refs: [{
        ref: 'BranchListPanel',
        selector: 'UserMGMT.branch.BranchListPanel'
    },{
        ref: 'AppMainView',
        selector: 'UserMGMT.AppMainView'
    }],

    init: function() {                       console.log(' init ctrl 1'/*,this.getAdd1(), this.getAdd2()*/ );

    }
});










/*
 // - ref - name of the reference.
 // - selector - Ext.ComponentQuery selector to access the component.
 // - autoCreate - True to create the component automatically if not found on page.
 // - forceCreate - Forces the creation of the component every time reference is accessed (when get<REFNAME> is called).
 // - xtype - Used to create-auto
 */

//init: function() {                       console.log(' init UserMGMTPanelMain  ctrl 1'/*,this.getAdd1(), this.getAdd2()*/ );
//    // this.getController('AppMainView').getBranchListPanel()
//    // this.control({
//    //     'BranchListPanel': {
//    //         click: this.update
//    //     }
//    // });
//
//    // this.listen({
//    //     controller: {
//    //         '#Workflows': {
//    //             view: this.showHistory
//    //         }
//    //     },
//    //     component: {
//    //         'grid[xtype=workflow.list]': {
//    //             beforerender: this.loadWorkflowHistory
//    //         }
//    //     }
//    // });
//
//    // fire requestcomplete event
//    // this.fireEvent( 'requestcomplete', request, success );
//}
////    , update:function(){
////          console.log(' init clicked  ctrl 1');
////    }