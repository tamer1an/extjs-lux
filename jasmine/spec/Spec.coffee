describe "Application", ->
  app = null
  #mainCtrl = null

  beforeEach ->
    option = appOptions
    app = Ext.application "UserApp", option
    
  afterEach ->
     #Ext.destroy(app);

  it "has loaded ExtJS 4", ->
    expect(typeof(Ext)).toEqual('object');
    expect( Ext ).toBeDefined()
    expect( Ext.getVersion() ).toBeTruthy()
    expect( Ext.getVersion().major ).toEqual( 4 )
    
  it "Application Unit", ->

    