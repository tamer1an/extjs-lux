/**
 * @namespace {EOMS} namespace
 * @description {Displays application user, branch, role ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {EOMS.core.Panel}
 *
 * @return {AppMain}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.view.AppMain',{
    extend: 'EOMS.core.Panel',
    alias: ['widget.nsEOMS.AppMain','widget.main'],
    defaults:{ collapsible: true }, //frame:true
    height: 1200,
    autoScroll:true,

    initComponent:function(){
        console.log('init appmainView');	
	
		this.items = [{
            xtype:'nsEOMS.core.Panel',
            height: 800,
			width:'100%',
			// items:[this.getSVGTemplate()]
			html: this.getDOMTemplate(),
			listeners:{
				afterrender:function(){
					EOMS.getApplication().getController('Angular');									
				}
			}
        }];			
        this.callParent(arguments);
    },
	getDOMTemplate:function(){
		return '<div id="MS" ng-controller="MsCtrl">'+ 
				 '<input type="text" class="input-small" placeholder="Name" style="margin-left:15px;" ng-model="search.name" />'+
				 '<input type="text" class="input-small" placeholder="Name" style="margin-left:15px;" ng-model="search2.name" />'+				 
				 '<section class="board">'+
					'<div>'+
						 '<ul ng-repeat="item in list | filter:search" class="f">'+							 
							'<li>'+
								'<a ng-href="#/airports/{{item.name}}" ng-click="setSelected(item)"/> {{item.name | lowercase}} </a> '+
								'<div class="connection-left btop-green bbottom-red "></div>'+
							'</li>'+							
						 '</ul>'+
					'</div>'+			   
					'<div></div>'+					 
					'<div>'+
						 '<ul ng-repeat="item in list2 | filter:search2" class="r">'+							 
							'<li>'+
								'<a ng-href="#/airports/{{item.name}}" ng-click="setSelected(item)"/> {{item.name | lowercase}} </a>'+
								'<div class="connection-right btop-red bbottom-green"></div>'+
							'</li>'+																		
						 '</ul>'+
					'</div>'+					 
				 '</section>'+
			 '</div>';
	},
	getSVGTemplate: function(){
		var drawComponent = Ext.create('Ext.draw.Component', {			
			viewBox: false,			
			items: [{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#0f0',
				x: 50,
				y: 50,
				listeners:{
					click:function(rect){
						// alert(1);
						console.log(arguments);
						rect.setStyle('fill',"#000")
					}
				}
			},{
				type: "path",
				path: "M 150,60 H 200",
				fill: "none",
				stroke:"red"
			},{
				type: "path",
				path: "M 150,80 H 200",
				fill: "none",
				stroke:"green", 
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#00D9D9',
				x: 50,
				y: 150,
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#0000D9',
				x: 50,
				y: 250,
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#B32D00',
				x: 50,
				y: 350,
			},{
				type: 'rect',
				width: 50,
				height: 450,
				fill: '#CCC',
				x: 200,
				y: 50,
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#0f0',
				x: 300,
				y: 50,
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#00D9D9',
				x: 300,
				y: 150,
			},{
				type: 'rect',
				width: 100,
				height: 50,
				fill: '#0000D9',
				x: 300,
				y: 250,
			}]
		});	  

		return drawComponent;	
	}	
});





/////////////////////////////////////    Example of Template component
// var t = new Ext.Template([
	// '<div name="{id}">',
		// '<span class="{cls}">{name:trim} {value:ellipsis(10)}</span>',
	// '</div>',
// ]);
// t.compile();
// console.log(Ext.get("MS"))
// t.append("MS", {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});		
// debugger;
					

					
/* /////////////////////////////////	Example of Draw component
	// 
*/