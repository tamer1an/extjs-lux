/**
 * Base {@link Ext.panel.Panel} from which all other panels will extend
 * @extends  {Ext.panel.Panel}
 * @description {Proxy class for all Panels in application}
 *
 * @return {Panel}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.PanelView',{
    extend: 'Ext.panel.Panel',
    alias: ['widget.nsMYTEST.core.Panel' , 'widget.corePanel']
});
