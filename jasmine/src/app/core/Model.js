/**
 * Base {@link Ext.data.Model} from which all other models will extend
 * @extends  {Ext.data.Model}
 * @description {Proxy class for all Models in application}
 *
 * @return {Model}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.Model',{
    extend: 'Ext.data.Model',

    /**
     * Persist  associations, hasMany & belongsTo, fix to  proxy
     * @cfg {Boolean}
       persistAssociations: false,
     */
    save: function() {
        var me = this;

        if (me.persistAssociations) {
            me.set( me.getAssociatedData() );
        }
        me.callParent(arguments);
    }
});