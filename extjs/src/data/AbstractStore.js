/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @author Ed Spencer
 *
 * AbstractStore is a superclass of {@link Ext.data.Store} and {@link Ext.data.TreeStore}. It's never used directly,
 * but offers a set of methods used by both of those subclasses.
 * 
 * We've left it here in the docs for reference purposes, but unless you need to make a whole new type of Store, what
 * you're probably looking for is {@link Ext.data.Store}. If you're still interested, here's a brief description of what 
 * AbstractStore is and is not.
 * 
 * AbstractStore provides the basic configuration for anything that can be considered a Store. It expects to be 
 * given a {@link Ext.data.Model Model} that represents the type of data in the Store. It also expects to be given a 
 * {@link Ext.data.proxy.Proxy Proxy} that handles the loading of data into the Store.
 * 
 * AbstractStore provides a few helpful methods such as {@link #load} and {@link #sync}, which load and save data
 * respectively, passing the requests through the configured {@link #proxy}. Both built-in Store subclasses add extra
 * behavior to each of these functions. Note also that each AbstractStore subclass has its own way of storing data - 
 * in {@link Ext.data.Store} the data is saved as a flat {@link Ext.util.MixedCollection MixedCollection}, whereas in
 * {@link Ext.data.TreeStore TreeStore} we use a {@link Ext.data.Tree} to maintain the data's hierarchy.
 * 
 * The store provides filtering and sorting support. This sorting/filtering can happen on the client side
 * or can be completed on the server. This is controlled by the {@link Ext.data.Store#remoteSort remoteSort} and
 * {@link Ext.data.Store#remoteFilter remoteFilter} config options. For more information see the {@link #sort} and
 * {@link Ext.data.Store#filter filter} methods.
 */
Ext.define('Ext.data.AbstractStore', {
    requires: ['Ext.util.MixedCollection', 'Ext.data.Operation', 'Ext.util.Filter'],
    
    mixins: {
        observable: 'Ext.util.Observable',
        sortable: 'Ext.util.Sortable'
    },
    
    statics: {
        create: function(store){
            if (!store.isStore) {
                if (!store.type) {
                    store.type = 'store';
                }
                store = Ext.createByAlias('store.' + store.type, store);
            }
            return store;
        }    
    },
    
    remoteSort  : false,
    remoteFilter: false,

    /**
     * @cfg {String/Ext.data.proxy.Proxy/Object} proxy
     * The Proxy to use for this Store. This can be either a string, a config object or a Proxy instance -
     * see {@link #setProxy} for details.
     */

    /**
     * @cfg {Boolean/Object} autoLoad
     * If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called
     * after creation. If the value of autoLoad is an Object, this Object will be passed to the store's load method.
     * Defaults to false.
     */
    autoLoad: false,

    /**
     * @cfg {Boolean} autoSync
     * True to automatically sync the Store with its Proxy after every edit to one of its Records. Defaults to false.
     */
    autoSync: false,

    /**
     * @property {String} batchUpdateMode
     * Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's
     * internal representation of the data after each operation of the batch has completed, 'complete' will wait until
     * the entire batch has been completed before updating the Store's data. 'complete' is a good choice for local
     * storage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.
     */
    batchUpdateMode: 'operation',

    /**
     * @property {Boolean} filterOnLoad
     * If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.
     * Defaults to true, ignored if {@link Ext.data.Store#remoteFilter remoteFilter} is true
     */
    filterOnLoad: true,

    /**
     * @property {Boolean} sortOnLoad
     * If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.
     * Defaults to true, igored if {@link Ext.data.Store#remoteSort remoteSort} is true
     */
    sortOnLoad: true,

    /**
     * @property {Boolean} implicitModel
     * True if a model was created implicitly for this Store. This happens if a fields array is passed to the Store's
     * constructor instead of a model constructor or name.
     * @private
     */
    implicitModel: false,

    /**
     * @property {String} defaultProxyType
     * The string type of the Proxy to create if none is specified. This defaults to creating a
     * {@link Ext.data.proxy.Memory memory proxy}.
     */
    defaultProxyType: 'memory',

    /**
     * @property {Boolean} isDestroyed
     * True if the Store has already been destroyed. If this is true, the reference to Store should be deleted
     * as it will not function correctly any more.
     */
    isDestroyed: false,

    isStore: true,

    /**
     * @cfg {String} storeId
     * Unique identifier for this store. If present, this Store will be registered with the {@link Ext.data.StoreManager},
     * making it easy to reuse elsewhere. Defaults to undefined.
     */
    
    /**
     * @cfg {Object[]} fields
     * This may be used in place of specifying a {@link #model} configuration. The fields should be a 
     * set of {@link Ext.data.Field} configuration objects. The store will automatically create a {@link Ext.data.Model}
     * with these fields. In general this configuration option should be avoided, it exists for the purposes of
     * backwards compatibility. For anything more complicated, such as specifying a particular id property or
     * assocations, a {@link Ext.data.Model} should be defined and specified for the {@link #model}
     * config.
     */

    /**
     * @cfg {String} model
     * Name of the {@link Ext.data.Model Model} associated with this store.
     * The string is used as an argument for {@link Ext.ModelManager#getModel}.
     */

    sortRoot: 'data',
    
    //documented above
    constructor: function(config) {
        var me = this,
            filters;
        
        me.addEvents(
            /**
             * @event add
             * Fired when a Model instance has been added to this Store
             * @param {Ext.data.Store} store The store
             * @param {Ext.data.Model[]} records The Model instances that were added
             * @param {Number} index The index at which the instances were inserted
             */
            'add',

            /**
             * @event remove
             * Fired when a Model instance has been removed from this Store
             * @param {Ext.data.Store} store The Store object
             * @param {Ext.data.Model} record The record that was removed
             * @param {Number} index The index of the record that was removed
             */
            'remove',
            
            /**
             * @event update
             * Fires when a Model instance has been updated
             * @param {Ext.data.Store} this
             * @param {Ext.data.Model} record The Model instance that was updated
             * @param {String} operation The update operation being performed. Value may be one of:
             *
             *     Ext.data.Model.EDIT
             *     Ext.data.Model.REJECT
             *     Ext.data.Model.COMMIT
             */
            'update',

            /**
             * @event datachanged
             * Fires whenever the records in the Store have changed in some way - this could include adding or removing
             * records, or updating the data in existing records
             * @param {Ext.data.Store} this The data store
             */
            'datachanged',

            /**
             * @event beforeload
             * Fires before a request is made for a new data object. If the beforeload handler returns false the load
             * action will be canceled.
             * @param {Ext.data.Store} store This Store
             * @param {Ext.data.Operation} operation The Ext.data.Operation object that will be passed to the Proxy to
             * load the Store
             */
            'beforeload',

            /**
             * @event load
             * Fires whenever the store reads data from a remote data source.
             * @param {Ext.data.Store} this
             * @param {Ext.data.Model[]} records An array of records
             * @param {Boolean} successful True if the operation was successful.
             */
            'load',
            
            /**
             * @event write
             * Fires whenever a successful write has been made via the configured {@link #proxy Proxy}
             * @param {Ext.data.Store} store This Store
             * @param {Ext.data.Operation} operation The {@link Ext.data.Operation Operation} object that was used in
             * the write
             */
            'write',

            /**
             * @event beforesync
             * Fired before a call to {@link #sync} is executed. Return false from any listener to cancel the synv
             * @param {Object} options Hash of all records to be synchronized, broken down into create, update and destroy
             */
            'beforesync',
            /**
             * @event clear
             * Fired after the {@link #removeAll} method is called.
             * @param {Ext.data.Store} this
             */
            'clear'
        );
        
        Ext.apply(me, config);
        // don't use *config* anymore from here on... use *me* instead...

        /**
         * Temporary cache in which removed model instances are kept until successfully synchronised with a Proxy,
         * at which point this is cleared.
         * @private
         * @property {Ext.data.Model[]} removed
         */
        me.removed = [];

        me.mixins.observable.constructor.apply(me, arguments);
        me.model = Ext.ModelManager.getModel(me.model);

        /**
         * @property {Object} modelDefaults
         * @private
         * A set of default values to be applied to every model instance added via {@link #insert} or created via {@link #create}.
         * This is used internally by associations to set foreign keys and other fields. See the Association classes source code
         * for examples. This should not need to be used by application developers.
         */
        Ext.applyIf(me, {
            modelDefaults: {}
        });

        //Supports the 3.x style of simply passing an array of fields to the store, implicitly creating a model
        if (!me.model && me.fields) {
            me.model = Ext.define('Ext.data.Store.ImplicitModel-' + (me.storeId || Ext.id()), {
                extend: 'Ext.data.Model',
                fields: me.fields,
                proxy: me.proxy || me.defaultProxyType
            });

            delete me.fields;

            me.implicitModel = true;
        }
        
        // <debug>
        if (!me.model) {
            if (Ext.isDefined(Ext.global.console)) {
                Ext.global.console.warn('Store defined with no model. You may have mistyped the model name.');
            }
        }
        // </debug>

        //ensures that the Proxy is instantiated correctly
        me.setProxy(me.proxy || me.model.getProxy());

        if (me.id && !me.storeId) {
            me.storeId = me.id;
            delete me.id;
        }

        if (me.storeId) {
            Ext.data.StoreManager.register(me);
        }
        
        me.mixins.sortable.initSortable.call(me);        
        
        /**
         * @property {Ext.util.MixedCollection} filters
         * The collection of {@link Ext.util.Filter Filters} currently applied to this Store
         */
        filters = me.decodeFilters(me.filters);
        me.filters = Ext.create('Ext.util.MixedCollection');
        me.filters.addAll(filters);
    },

    /**
     * Sets the Store's Proxy by string, config object or Proxy instance
     * @param {String/Object/Ext.data.proxy.Proxy} proxy The new Proxy, which can be either a type string, a configuration object
     * or an Ext.data.proxy.Proxy instance
     * @return {Ext.data.proxy.Proxy} The attached Proxy object
     */
    setProxy: function(proxy) {
        var me = this;
        
        if (proxy instanceof Ext.data.proxy.Proxy) {
            proxy.setModel(me.model);
        } else {
            if (Ext.isString(proxy)) {
                proxy = {
                    type: proxy    
                };
            }
            Ext.applyIf(proxy, {
                model: me.model
            });
            
            proxy = Ext.createByAlias('proxy.' + proxy.type, proxy);
        }
        
        me.proxy = proxy;
        
        return me.proxy;
    },

    /**
     * Returns the proxy currently attached to this proxy instance
     * @return {Ext.data.proxy.Proxy} The Proxy instance
     */
    getProxy: function() {
        return this.proxy;
    },

    //saves any phantom records
    create: function(data, options) {
        var me = this,
            instance = Ext.ModelManager.create(Ext.applyIf(data, me.modelDefaults), me.model.modelName),
            operation;
        
        options = options || {};

        Ext.applyIf(options, {
            action : 'create',
            records: [instance]
        });

        operation = Ext.create('Ext.data.Operation', options);

        me.proxy.create(operation, me.onProxyWrite, me);
        
        return instance;
    },

    read: function() {
        return this.load.apply(this, arguments);
    },

    onProxyRead: Ext.emptyFn,

    update: function(options) {
        var me = this,
            operation;
        options = options || {};

        Ext.applyIf(options, {
            action : 'update',
            records: me.getUpdatedRecords()
        });

        operation = Ext.create('Ext.data.Operation', options);

        return me.proxy.update(operation, me.onProxyWrite, me);
    },

    /**
     * @private
     * Callback for any write Operation over the Proxy. Updates the Store's MixedCollection to reflect
     * the updates provided by the Proxy
     */
    onProxyWrite: function(operation) {
        var me = this,
            success = operation.wasSuccessful(),
            records = operation.getRecords();

        switch (operation.action) {
            case 'create':
                me.onCreateRecords(records, operation, success);
                break;
            case 'update':
                me.onUpdateRecords(records, operation, success);
                break;
            case 'destroy':
                me.onDestroyRecords(records, operation, success);
                break;
        }

        if (success) {
            me.fireEvent('write', me, operation);
            me.fireEvent('datachanged', me);
        }
        //this is a callback that would have been passed to the 'create', 'update' or 'destroy' function and is optional
        Ext.callback(operation.callback, operation.scope || me, [records, operation, success]);
    },


    //tells the attached proxy to destroy the given records
    destroy: function(options) {
        var me = this,
            operation;
            
        options = options || {};

        Ext.applyIf(options, {
            action : 'destroy',
            records: me.getRemovedRecords()
        });

        operation = Ext.create('Ext.data.Operation', options);

        return me.proxy.destroy(operation, me.onProxyWrite, me);
    },

    /**
     * @private
     * Attached as the 'operationcomplete' event listener to a proxy's Batch object. By default just calls through
     * to onProxyWrite.
     */
    onBatchOperationComplete: functi