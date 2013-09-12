/**
 * Displays application structure
 * @memberOf {Ext.app.Controller}
 * @extends  {UserApp.core.Controller}
 */

Ext.define('UserApp.controller.AppMainView',{
    extend:'UserApp.core.Controller',
    views: ['AppMainView'],
    
    refs: [{
        ref: 'BranchListPanel',
        selector: 'UserMGMT.branch.BranchListPanel'
    },{
        ref: 'BranchListPanel',
        selector: 'UserMGMT.branch.BranchListPanel'
    },{
        ref: 'AppMainView',
        selector: 'UserMGMT.AppMainView'
    },{
        ref: 'Win1',
        selector: 'w1',
        autoCreate:true,
        xtype:'UserMGMT.AddUserWindow',
        listeners: {
            click: {
                element: 'body >', //bind to the underlying el property on the panel
                fn: function(){ console.log('click el'); }
            },
            dblclick: {
                element: 'items', //bind to the underlying body property on the panel
                fn: function(){ console.log('dblclick body'); }
            },
             activatez: function() {
             console.log('activate body');
            }
        }
    }],

    init: function() {                       console.log(' init ctrl 1'/*,this.getAdd1(), this.getAdd2()*/ );
        
        window.test = this;
        
        this.control('button[action=adduser]', {
             click: this.updateUser,
             
         });
    },
    updateUser : function(p) {
        console.log(p);
        console.log(this.getWin1().show());
    },
    
    
    
    
    
    
    
    //   saveUserHandler  : function (){ // .getForm().updateRecord(record);  //formPanel.getValues()
    //     console.log(1)
    //     var formPanel     = this.getApp().getUserForm();

    //     formPanel.getForm().updateRecord()
    //     formPanel.getRecord().save(
//            {
//            success:function (model){          // arguments[0] = action: "update"
//               var rGrid = this.getApp().getRGrid(),
//                   bGrid = this.getApp().getBGrid()


//                console.log(arguments,this)
//                rGrid.reconfigure( model.userEntitlements());
//                bGrid.reconfigure(  model.userSplits()   );

//            },
//            scope:this
//        }
        // );


        //.getForm().isDirty()

//        formPanel.getForm().updateRecord(record)
//        formPanel.getValues()

//        if (basicForm.isValid())
//        if (!record) {
//            record = Ext.data.StoreManager.lookup('theModel').add( this.up('form').getForm().getFieldValues())[0];
//            basicForm.loadRecord(record);
//        } else {
//            basicForm.updateRecord(record);
//        }

//	 formPanel.getRecord()//  - not updated record
//  	 formPanel.getValues() - raw values

// 	 formPanel.getForm().updateRecord() - update values

//     	 formPanel.getForm().getRecord()
// 	 formPanel.getForm()..getValues()

//        myForm.setValues(myForm.getValues());

//        Ext.override(Ext.form.BasicForm, {
//            clearDirty: function() {
//                var i, it = this.items.items, l = it.length, c;
//                for (i = 0; i < l; i++) {
//                    c = it[i];
//                    c.originalValue = String(c.getValue());
//                }
//            }
//        });

//        Ext.form.FormPanel.prototype.initValues = function() {
//            if(this.form) {
//                this.form.items.each(function() {
//                    this.initValue();
//                });
//            }
//        };
 //   },
    
    
    
    
});


// listeners: {
//     afterrender: {
//           fn: function (cmp) {
//             cmp.update(Ext.String.format(_localise('Last.Saved'), '6:54 pm'));
//           }
//     }
//   }

// me.addEvents(
//         'beforedestroy',
//         'destroy',
//         'render',
//         'mousedown',
//         'mouseup',
//         'mouseover',
//         'mouseout',
//         'mousemove',
//         'click'
//     );

// listeners: {
//   load: {
//       fn: function() {
//          ...
//       },
//       scope: yourScope//for example "this"
//   }
// }

// listeners: {
//     el: {
//         click: function() {
//             ...
//         }
//     }
// }

// listeners: {
//     itemmousedown: function (obj) {
//         alert(obj.storeItem.data['source'] + ' &' + obj.storeItem.data['count']);
//     }
// },

// init: function () {
//     this.control({
//         'barColumnChart': { 
//           click: function () {
//             var viewCmp = Ext.getCmp('barColumnChart');
//             viewCmp.fireEvent('itemmousedown');ss
//           }
//         }
//     });},

/*
 // - ref - name of the reference.
 // - selector - Ext.ComponentQuery selector to access the component.
 // - autoCreate - True to create the component automatically if not found on page.
 // - forceCreate - Forces the creation of the component every time reference is accessed (when get<REFNAME> is called).
 // - xtype - Used to create-auto
 */

//init: function() {                       console.log(' init UserMGMTPanelMain  ctrl 1'/*,this.getAdd1(), this.getAdd2()*/ );
//    // this.getController('AppMainView').getBranchListPanel()
//    // this.control({
//    //     'BranchListPanel': {
//    //         click: this.update
//    //     }
//    // });
//
//    // this.listen({
//    //     controller: {
//    //         '#Workflows': {
//    //             view: this.showHistory
//    //         }
//    //     },
//    //     component: {
//    //         'grid[xtype=workflow.list]': {
//    //             beforerender: this.loadWorkflowHistory
//    //         }
//    //     }
//    // });
//
//    // fire requestcomplete event
//    // this.fireEvent( 'requestcomplete', request, success );
//}
////    , update:function(){
////          console.log(' init clicked  ctrl 1');
////    }