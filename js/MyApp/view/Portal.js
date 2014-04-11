/**
 * @namespace {MmcApp} namespace
 * @description {Portlet view}
 * @extends  {MmcApp.view.portal.PortalPanel}
 *
 * @author {Andrii Trybynenko}
 */

Ext.define('MmcApp.view.Portal', {
    extend: 'MmcApp.view.portal.PortalPanel',      
    alias: 'widget.portletpanel',
    // uses: ['MmcApp.config.Runtime'],
    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool){
                var portlet = panelHeader.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    }, 
	defaults:{	margin: 10	},
    initComponent: function() {       
        Ext.apply(this, {
            items: [{
                id: 'col-1',
                items: [{
                    id: 'portlet-2',
                    title: 'Portlet 1',
                    tools: this.getTools(),
                    html: this.shortLoremMarkup
                }]
			},{
                id: 'col-2',
                items: [{
                    id: 'portlet-3',
                    title: 'Portlet 2',
                    tools: this.getTools(),
                    html: this.loremMarkup
                }]
            }]            
        });                
        this.callParent(arguments);
    },
	tbar: [{
		xtype:'button',
		text:'Switch theme',
		handler:function(){
			Ext.util.CSS.swapStyleSheet("theme","lib/extjs/resources/css/ext-all-gray.css");
		}
	}],
	
	loremMarkup: '<div class="portlet-content"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, '+
    'porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, '+
    'lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis '+
    'vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna.<br/><br/>'+
    'Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing '+
    'eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt '+
    'diam nec urna. Curabitur velit. Lorem ipsum dolor sit amet.</p></div>',

    shortLoremMarkup: '<div class="portlet-content"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, '+
    'sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales '+
    'non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet '+
    'tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla.</p></div>'
});