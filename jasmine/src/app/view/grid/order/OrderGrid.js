/**
 * @namespace {EOMS} namespace
 *
 * @return {RoleGrid}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.view.grid.order.OrderGrid',{
    extend: 'EOMS.core.GridView',
    alias: ['widget.nsEOMS.order.OrderGrid','widget.oGrid'],
    requires: ['Ext.ux.CheckColumn'],
    title: '',
    height:300,
    cls: 'baseShadow',
    viewConfig: {
        markDirty: false
    },
    initComponent:function(){
        console.log('initGrid')
        this.columns=[
            {
                xtype: 'checkcolumn',
                header: '',
                dataIndex: 'assigned',
                hidden: !EOMS.config.Runtime.getEditMode(),
                width: 40
            },
            { header: 'ID',  dataIndex: 'id'},
            { header: 'Name', dataIndex: 'name',flex:1 },
            { header: 'Description', dataIndex: 'description',flex:3 }
        ];

        this.callParent(arguments);
    }
});
