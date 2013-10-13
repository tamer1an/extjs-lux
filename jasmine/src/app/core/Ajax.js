
/**
 * Base {@link Ext.Ajax} from which all other models will extend
 * @extends  {Ext.data.Connection}
 * @description {Proxy class for all Models in application}
 *
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.Ajax',{
    extend: 'Ext.data.Connection',
    disableCaching:true
//    defaultHeaders: { 'Accept': 'application/json' }
});


//(function(){
//    var originalRequest = Ext.Connection.prototype.request,
//        newCallback = function(options, success, response, callback, showMsg){
//            options.callback = callback;
//            var json = onAjax(options, success, response, showMsg);
//            Ext.callback(callback, this, [options, success, response, json]);
//        };
//    Ext.override(Ext.Connection, {
//        request: function(options){
//            originalRequest.call(this, Ext.applyIf({
//                callback: newCallback.createDelegate(options.scope, [options.callback, options.showMsg], 3)
//            }, options));
//        }
//    });
//})();