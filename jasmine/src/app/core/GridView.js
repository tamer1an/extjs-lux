/**
 * Base {@link Ext.grid.Panel} from which all other grids will extend
 * @extends  {Ext.grid.Panel}
 * @description {Proxy class for all Grids in application}
 *
 * @return {Grid}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.GridView',{
    extend: 'Ext.grid.Panel',
    alias: ['widget.nsEOMS.core.Grid' , 'widget.coreGrid']
});


//viewConfig: {
//    markDirty: false,
//    emptyText: 'Plese selected user'
//}