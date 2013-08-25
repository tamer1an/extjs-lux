Ext.define('UserApp.view.form.branch.CreateBranch',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.UserMGMT.CreateBranch',

    height: 253,
    margin: '0  0 0 10px',
    width: 402,
    layout: {
        type: 'auto'
    },
    bodyPadding: 10,
    title: 'Add New ',

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
            title: ' list',
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
                            boxLabel: '- This ',
                            checked: true
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: ' is '
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: ' Branch is ',
                            checked: true
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: ' This Branch is ',
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
