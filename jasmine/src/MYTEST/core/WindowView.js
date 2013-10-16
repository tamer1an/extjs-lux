/**
 * Base {@link Ext.window.Window} from which all other windows will extend
 * @extends  {Ext.window.Window}
 * @description {Proxy class for all Windows in application}
 *
 * @return {Window}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.WindowView', {
    extend: 'Ext.window.Window',
    alias: ['widget.nsMYTEST.core.WindowView', 'widget.coreWindow']
});