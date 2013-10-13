Ext.define('MYTEST.view.Viewport', {
    extend:'Ext.container.Container',
    alias: ["widget.nsMYTEST.mainFrame" , "widget.mainFrame"],
    layout:'auto',
    width:1200,
    height:500,
    renderTo: document.getElementById('MYTEST-App'),
    initComponent: function(){
        console.log('app viewport');

        this.items= [{
            xtype:  'nsMYTEST.core.Panel',
            layout: 'anchor',
            itemId: 'mainFrame',
            region: 'center',
            height:500,
            width:1000,

            bbar:    this.getAppBBar(),     // add bottom bar

            items:[{
                xtype:  'nsMYTEST.AppMainView',
                anchor: '100% 100%',
                height: 500
            }]
        }];
        this.callParent(arguments);
    },
    getAppBBar : function() {
        var formStructure=[],
            disabled = true,
            xtype    = 'coreBtn',
            fields   = {
                MYTESTReport:  'Generate Report',
                MYTESTImport:  'Import',
                MYTESTExport:  'Export'
            };

         for(var item in fields) {
            formStructure.push({
                xtype: xtype,
                disabled: disabled,
                text: fields[item],
                itemId: item
            })
            formStructure.push('-');
        }
        return formStructure;
    }
});