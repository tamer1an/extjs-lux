Ext.define('UserApp.view.panel.branch.BranchListPanel',{
    extend: 'UserApp.core.PanelView',
    alias: 'widget.UserMGMT.branch.BranchListPanel',
    border: false,
    layout:'fit',  
    bodyPadding: 10,
    title: 'TITLE2',
    tools: [{
        xtype: 'tool',
        type: 'down'
    }],
    items: [{
        xtype: 'UserMGMT.branch.BranchGrid',
        title:''
        // border: false,
        // layout:'fit', 
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            '->', '-',
            {
                xtype: 'button',
                text:  'Add +',
                disabled: UserApp.config.Runtime.getSomeValue(),
                baseId: Ext.id() + '-Add-Br',
                listeners: {
                    scope: this,
                    click: {
                        element: 'el', //bind to the underlying el property on the panel
                        fn: function(){ 
                            
                            Ext.create('UserApp.view.window.user.AddUserWindow',{
                                
                                
                            }).show();
                            
                            console.log('click el'); 
                            
                        }
                    }
                    // afterrender: function() {
                    //     alert(1);
                    // }
                }
        }],
    }],
    
    initComponent:function(){
        console.log(' Init branchpanel view ');
        this.callParent(arguments);
    }
});
