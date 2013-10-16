describe("Application", function() { 
var app; app = null; 
return it("has loaded ExtJS 4", function() {
    expect(typeof Ext).toEqual('object'); 
    expect(Ext).toBeDefined(); 
    expect(Ext.getVersion()).toBeTruthy();
    return expect(Ext.getVersion().major).toEqual(4); 
    }); 
});