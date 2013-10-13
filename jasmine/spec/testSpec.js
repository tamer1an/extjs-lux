(function() {
  describe("Application", function() {
    it("has loaded ExtJS 4", function() {
      expect(typeof Ext).toEqual('object');
      expect(Ext).toBeDefined();
      expect(Ext.getVersion()).toBeTruthy();
      return expect(Ext.getVersion().major).toEqual(4);
    });
    return it("has loaded Application", function() {
      return expect(window.UserApp).toBeDefined();
    });
  });
}).call(this);
