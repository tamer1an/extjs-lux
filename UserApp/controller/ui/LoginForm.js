Ext.define('UserApp.controller.ui.LoginForm',{
    extend:'Ext.app.Controller',
    // stores:['Book'],
    // models: ['Books'],
    views: ['form.LoginForm'],

    refs: [
        {
            ref: 'radio',
            selector: 'myRdo'
        }
    ],
    init: function() {
    	console.log(' init ctrl ');
		
        // this.getStore('Book').load();
        // this.control({
            // 'viewport>bookTabs dataview': {
            // itemclick: this.bindGridToPanel
            // }
        // });
    }
	
    // bindGridToPanel : function(grid, record) {
        // window.test =  this.getPanel();
        // this.getPanel().updateDetail(record.data);
    // }

});
