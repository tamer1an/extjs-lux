Ext.define('UserApp.controller.AppMainView',{
    extend:'UserApp.core.Controller',

    views: ['AppMainView'],
    
    refs: [{
        ref: 'BranchListPanel',
        selector: '[xtype=UserMGMT.branch.BranchListPanel]'
    },{
        ref: 'AppMainView',
        selector: '[xtype=UserMGMT.AppMainView]'
    }],
    
    /*     
       // - ref - name of the reference.
       // - selector - Ext.ComponentQuery selector to access the component.
       // - autoCreate - True to create the component automatically if not found on page.
       // - forceCreate - Forces the creation of the component every time reference is accessed (when get<REFNAME> is called).
       // - xtype - Used to create-auto
     
    */
    
    // defaults: {
    //     xtype: 'panel',
    //     width: 200,
    //     height: 200,
    //     bodyPadding: 10
    // },
    
    // listeners: {
    //     click: {
    //         element: 'el', //bind to the underlying el property on the panel
    //         fn: function(){ console.log('click el'); }
    //     },
    //     dblclick: {
    //         element: 'body', //bind to the underlying body property on the panel
    //         fn: function(){ console.log('dblclick body'); }
    //     },
    //     change: alert
        
    //     // scope: this
    // },

    init: function() {        
        // this.getController('AppMainView').getAdd1()
        // this.control()
        
         // this.control({
         //     'BranchListPanel': {
         //         click: this.update
         //     }
         // });
                
        console.log(' init UserMGMTPanelMain  ctrl 1'/*,this.getAdd1(), this.getAdd2()*/ );
    },
    update:function(){
          console.log(' init clicked  ctrl 1');
    }
});
