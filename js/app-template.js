Ext.require('Ext.container.Viewport');

Ext.application({
    name:'UserApp',
    appFolder:'UserApp',   
 // autoCreateViewport : true, // Ext.create( "UserApp.view.Viewport",this); 
	
    controllers:['UserApp.controller.ui.LoginForm'],
		
	init: function(){ console.log(' init app '); },		
	
    launch: function(){
		console.log(' launch ');
		
        Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				region: 'north',
				html: '<h1 class="x-panel-header">Page Title</h1>',
				border: false,
				margins: '0 0 5 0'
			}, {
				region: 'west',
				collapsible: true,
				title: 'Navigation',
				width: 150
				// could use a TreePanel or AccordionLayout for navigational items
			}, {
				region: 'south',
				title: 'South Panel',
				collapsible: true,
				html: 'Information goes here',
				split: true,
				height: 100,
				minHeight: 100
			}, {
				region: 'east',
				title: 'East Panel',
				collapsible: true,
				split: true,
				width: 150
			}, {
				region: 'center',
				xtype: 'tabpanel', // TabPanel itself has no title
				activeTab: 0,      // First tab active by default
				items:[ {
					title: 'Default Tab',
					html: 'The first tab\'s content. Others may be added dynamically'
				}
				]
			}]
		});
    }
});

// var app = UserApp.getApplication();

/*
//////////////////////////////////////////
Ext.define('MyApp.view.MyGrid',{
    extend : 'Ext.grid.Panel',
    store : 'MyStore',
    columns : [{...}],
    initComponent : function(){
        this.menu = this.buildMenu();
        this.callParent(arguments);
        this.on({
            scope : this,
            itemcontextmenu : this.onItemContextMenu
        });
    },
 
    buildMenu : function(){
        return Ext.create('Ext.menu.Menu',{
            items : [{
                text : 'Do Something'
            }]
        });
    },
 
    onDestroy : function(){
        this.menu.destroy();
        this.callParent(arguments);
    },
 
    onItemContextMenu : function(view,rec,item,index,event){
        event.stopEvent();
        this.menu.showAt(event.getXY());
    }
});
Example 2C. BEST: When the grid is destroyed, the context menu is also destroyed.

//////////////////////////////////////////
    this.getController('SomeOtherController').runSomeFunction(myParm);
    
    MyApp.getApplication().fireEvent('myevent');
    
    MyApp.getApplication().on({
        myevent : doSomething
    });
Example 3C. Another controller listens for the app-level event.

//////////////////////////////////////////
    var pictureSaveButton = Ext.ComponentQuery.query('#picturetoolbar > #savebutton')[0];
    var orderSaveButton   = Ext.ComponentQuery.query('#ordertoolbar > #savebutton')[0]; 
     
    // assuming we have a reference to the “picturetoolbar” as picToolbar
    picToolbar.down(‘#savebutton’);
    
    Example 6C. GOOD: Referencing components by ‘itemId’.
    
//////////////////////////////////////////     
    var mySaveButton = myToolbar.items.getAt(2);    
    var myWindow = myToolbar.ownerCt;
    Example 7A. BAD: Avoid retrieving component references based on component positioning.

    var mySaveButton = myToolbar.down(‘#savebutton’);    // searching against itemId    
    var myWindow = myToolbar.up(‘window’);
    Example 7B. GOOD: Use ComponentQuery to retrieve relative references.
 
//////////////////////////////////////////   
    9. Constraining a component to a parent component’s layout
    
    Ext.define('MyApp.view.MyGrid',{
    extend : 'Ext.grid.Panel',
    initComponent : function(){
        Ext.apply(this,{
            store : ‘MyStore’,
            region : 'center',
            ......
        });
        this.callParent(arguments);
    }
});
Example 9A. BAD: The ‘center’ region should not be specified here.
-----------------
Ext.define('MyApp.view.MyGrid',{
    extend : 'Ext.grid.Panel',
    initComponent : function(){
        Ext.apply(this,{
            store : ‘MyStore’,
            ......
        });
    }
});
 
// specify the region when the component is created...
Ext.create('MyApp.view.MyGrid',{
    region : 'center' 
});
Example 9B. GOOD: Specify the region when creating the component.
-------------

Ext.define('MyApp.view.MyGrid',{
    extend : 'Ext.grid.Panel',
    region : 'center', // default region
    initComponent : function(){
        Ext.apply(this,{
            store : ‘MyStore’,
            ......
        });
    }
});
 
Ext.create(‘MyApp.view.MyGrid’,{
    region : ‘north’, // overridden region
    height : 400
});
Example 9C. Also GOOD: Specify a default region and override if necessary.


//////////////////////////////////////////   
items : [{
    fieldLabel : ‘User’,
    name : ‘UserName’
},{
    fieldLabel : ‘Email’,
    name : ‘Email’
},{
    fieldLabel : ‘Home Address’,
    name : ‘Address’
}];
 
myForm.loadRecord(record);
Example 10B. GOOD: Use loadRecord to load all form fields with one line of code.
*/
