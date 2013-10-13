describe "EOMS Application", ->
  app = null
  mainCtrl = null
#  view = null

  beforeEach ->
    app = EOMS.getApplication()
    mainCtrl = app.getController("AppMainView")

#    ctrl.init();
#
#    view = Ext.create('TDD.view.Viewport', {
#      renderTo: Ext.getBody(),
#      listeners: {
#        render: function() {
#        controller.onLaunch();
#        }
#      }
#  });

  afterEach ->
    app = null
    mainCtrl = null
#    view.destroy();

  it "has loaded ExtJS 4", ->
    expect(typeof(Ext)).toEqual('object');
    expect( Ext ).toBeDefined()
    expect( Ext.getVersion() ).toBeTruthy()
    expect( Ext.getVersion().major ).toEqual( 4 )

  it "has loaded Application and all Refs", ->
    expect( window.EOMS ).toBeDefined()
    expect( app.getMFrame() ).not.toBeNull()

  it "has AppMainView conroller", ->
    expect( window.EOMS.controller.AppMainView ).toBeDefined()

