/**
 * Base {@link Ext.panel.Panel} from which all other panels-views will extend
 */
Ext.define('UserApp.core.PanelView',{
    extend: 'Ext.panel.Panel'   
   ,initComponent:function(){
        this.callParent(arguments);
    }
});
