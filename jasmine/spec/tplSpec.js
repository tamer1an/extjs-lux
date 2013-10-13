describe("EOMS", function() {
 
    it("has ExtJS4 loaded", function() {
		expect(typeof(Ext)).toEqual('object');	
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
    });

    it("has loaded EOMS code",function(){
        expect(EOMS).toBeDefined();
    });
	
    it("EOMS Modules testing",function(){
        var view = new MR.view.administration.User({ renderTo: Ext.getBody() }),
			ctrl = new MR.controller.administration.User();
    });

});


// =============================================================
Ext.define('TDD.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'panel',
            selector: '#main'
        }
    ],

    init: function() {
        this.control({
            'panel button[action="save"]': {
                click: this.save
            }
        });
    },

    save: function() {
        console.log('Save clicked');
    }
});


//Jasmine Spec
Ext.require([
    'TDD.controller.Main',
    'TDD.view.Viewport'
]);

describe("Main Controller", function() {
    var application, controller, view;

    beforeEach(function() {
        application = Ext.create('Ext.app.Application', {
            name: 'TDD'
        });

        controller = Ext.create('TDD.controller.Main', {
            application: application
        });

        spyOn(controller, 'save');

        controller.init();

        view = Ext.create('TDD.view.Viewport', {
            renderTo: Ext.getBody(),
            listeners: {
                render: function() {
                    controller.onLaunch();
                }
            }
        });
    });

    afterEach(function() {
        view.destroy();
        application = null;
        controller = null;
    });

    it("should be defined", function() {
        expect(controller).not.toBeNull();
    });

    it("should have a ref to the panel", function() {
        var panel = controller.getPanel();
        expect(panel).not.toBeNull();
    });

    it("should call save when save button is clicked", function() {
        var button = controller.getPanel().down('button[action="save"]');
        button.fireEvent('click');

        expect(controller.save).toHaveBeenCalled();
    });
});


// =============================================================

//describe "EOMS AppMainView", ->
//    it "has ...", ->
//    view = new EOMS.view.Viewport({ renderTo: Ext.getBody() })
//ctrl = new EOMS.controller.administration.User();

it('should be able to initialized', function() {
    var oStore = Ext.StoreMgr.lookup('xxx.DataStore');
    expect(oStore).toBeTruthy();
});

it('should load data correctly', function() {
    var oStore = Ext.StoreMgr.lookup('xxx.DataStore');
    oStore.loadData({
        data: {
            rows: [
                {
                    code: 'C1',
                    name: 'N1'
                },
                {
                    code: 'C2',
                    name: 'N2'
                }
            ],
            totalCount: 2
        }
    });

    expect(oStore.getTotalCount()).toEqual(2);
    var oRecord = oStore.getAt(0);
    expect(oRecord.get('code')).toEqual('C1');
    expect(oRecord.get('name')).toEqual('N1');
});

xxx.UiImpl = Ext.extend(xxx.Ui, {
    initComponent: function() {
        xxx.UiImpl.superclass.initComponent.call(this);

        this.emptyNameWarningMsg = 'Name is empty!';
        this.duplicateNameWarningMsg = 'Name has been in used!';
        this.nameField = Ext.getCmp('xxx.name');

        this.initEventHandlers();
    },

    initEventHandlers : function() {
        this.nameField.on('blur', this.validateName, this);
    },

    validateName: function(){
        var sName = this.nameField.getValue();
        if (sName == '') {
            this.nameField.markInvalid(this.emptyNameWarningMsg);
            return;
        }

        Ext.Ajax.request({
            url : config.appName() + "/foo/validateName",
            method : 'GET',
            params : {
                name : sName
            },
            success : function(data){
                if (data.responseText != '') {
                    this.nameField.markInvalid(this.duplicateNameWarningMsg);
                }
            },
            failure : function(data){
                alert("validate failure!");
            },
            scope: this
        });
    }
});



// =============================================================

// My code is far from complete (I�ve posted as version 0.1), but I�m hoping over time to develop it into something as powerful as YUI Test. In the current version, I�ve got the following functions:

// generateGuid()
// assertEquals()
// assertNotEquals()
// assertUndefinedOrNull()
// assertNotUndefinedOrNull()


	Ext.require("MyApp.widget.MyWidget");
	 
	describe("MyApp.widget.MyWidget", function() {
	  var widget;
	 
	  beforeEach(function() {
		widget = Ext.create("MyApp.widget.MyWidget", {
		  renderTo: "test",
		  value: "Some Initial Value"
		});
	  });
	 
	  afterEach(function() {
		Ext.destroy(widget);
	  });
	 
	  it("displays the initial value", function() {
		expect($('#test .display').text()).toEqual("Some Initial Value");
	  });
	});


// =============================================================
describe("Users", function() {
    var store = null, ctlr = null;

    beforeEach(function(){
        if (!ctlr) {
            ctlr = Application.getController('Users');
        }

        if (!store) {
            store = ctlr.getStore('Users');
        }

        expect(store).toBeTruthy();

        waitsFor(
            function(){ return !store.isLoading(); },
            "load never completed",
            4000
        );
    });

    it("should have users",function(){
        expect(store.getCount()).toBeGreaterThan(1);
    });

    it("should open the editor window", function(){
        var grid = Ext.ComponentQuery.query('userlist')[0];

        ctlr.editUser(grid,store.getAt(0));

        var edit = Ext.ComponentQuery.query('useredit')[0];

        expect(edit).toBeTruthy();
        if(edit)edit.destroy();
    });

});



/*
// ========================================== COFFEE

describe "EOMS Application", ->
 
  it "has loaded ExtJS 4", ->
    expect(typeof(Ext)).toEqual('object');
    expect( Ext ).toBeDefined()
    expect( Ext.getVersion() ).toBeTruthy()
    expect( Ext.getVersion().major ).toEqual( 4 )
 
 
  it "has loaded Application with expected Application name", ->
    expect( window.EOMS ).toBeDefined()
    expect( window.EOMS.name ).toEqual( "EOMS" )
 
 
  it "has created DeftJS IoC items", ->
    expect( Deft.ioc.Injector.canResolve( "companyStore" ) ).toBeTruthy()
    expect( Deft.ioc.Injector.canResolve( "some_$unknown$_alias" ) ).toBeFalsy()
 
 
  it "can inject dependencies into a target object", ->
    target =
      companyStore: null
      someOtherProperty: null
      config: {}
 
    Deft.ioc.Injector.inject( "companyStore", target )
 
    expect( target.companyStore ).toBeTruthy()
    expect( target.someOtherProperty ).toBeFalsy()
*/
