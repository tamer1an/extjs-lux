Ext.define('UserApp.view.form.AddNewBranch',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMTAddNewBranch',

    height: 253,
    margin: '0  0 0 10px',
    width: 402,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Add New Branch',

    tools: [
        {
            xtype: 'tool',
            tooltip: 'Additional place for long description if needed'
        }
    ],
    items: [
        {
            xtype: 'checkboxfield',
            margin: '0 0 0 300',
            fieldLabel: '',
            boxLabel: 'Select All'
        },
        {
            xtype: 'fieldset',
            height: 136,
            title: 'Branch list',
            items: [
                {
                    xtype: 'checkboxgroup',
                    width: 353,
                    layout: {
                        type: 'auto'
                    },
                    fieldLabel: '',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'AX39 - This Branch is AX39',
                            checked: true
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'WEWA  - This Branch is WEWA'
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'WEWN -  This Branch is WEWN',
                            checked: true
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'PT55 -  This Branch is PT55',
                            boxLabelAttrTpl: [
                                'ewtwt'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'button',
            margin: '10px 10px 10px 270px',
            overflowX: 'auto',
            text: 'Ok'
        },
        {
            xtype: 'button',
            margin: '10px 10px 10px 10px',
            overflowX: 'auto',
            text: 'Cancel'
        }
    ],

    initComponent:function(){
        console.log(' init view ');

        this.callParent(arguments);

    }
});
