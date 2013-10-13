/**
 * Base {@link Ext.window.Window} from which all other windows will extend
 * @extends  {Ext.window.Window}
 * @description {Proxy class for all Windows in application}
 *
 * @return {Window}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.WindowView', {
    extend: 'Ext.window.Window',
    alias: ['widget.nsEOMS.core.WindowView', 'widget.coreWindow']
});