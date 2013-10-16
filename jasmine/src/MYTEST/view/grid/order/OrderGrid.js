/**
 * @namespace {MYTEST} namespace
 *
 * @return {RoleGrid}
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.view.grid.order.OrderGrid',{
    extend: 'MYTEST.core.GridView',
    alias: ['widget.nsMYTEST.order.OrderGrid','widget.oGrid'],
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
                hidden: !MYTEST.config.Runtime.getEditMode(),
                width: 40
            },
            { header: 'ID',  dataIndex: 'id'},
            { header: 'Name', dataIndex: 'name',flex:1 },
            { header: 'Description', dataIndex: 'description',flex:3 }
        ];

        this.callParent(arguments);
    }
});
