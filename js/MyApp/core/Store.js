/**
 * Base {@link Ext.data.Store} from which all other stores will extend
 */
Ext.define('UserApp.core.Store',{
    extend:'Ext.data.Store'
    
    // restPath: '/api/staff',    
    // remoteFilter: true, // If true, we’ll do all our filtering via SQL/or other server-side mechanism…a must if our result set is “paged”
    // remoteSort: true,   // If true, we’ll do all our sorting via SQL/or other server-side mechanism…a must if our result set is “paged”
});