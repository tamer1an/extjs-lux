/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
describe("Ext", function() {
    
    describe("Ext.global", function() {
        it("should return the global scope", function() {
            expect(Ext.global).toBe((function(){ return this;}).call());
        });
    });
    
    describe("Ext.apply", function() {
        var origin, o;

        beforeEach(function() {
            origin = {
                name: 'value',
                something: 'cool',
                items: [1,2,3],
                method: function() {
                    this.myMethodCalled = true;
                },
                toString: function() {
                    this.myToStringCalled = true;
                }
            };
        });

        it("should copy normal properties", function() {
            Ext.apply(origin, {
                name: 'newName',
                items: [4,5,6],
                otherThing: 'not cool',
                isCool: false
            });

            expect(origin.name).toEqual('newName');
            expect(origin.items).toEqual([4,5,6]);
            expect(origin.something).toEqual('cool');
            expect(origin.otherThing).toEqual('not cool');
            expect(origin.isCool).toEqual(false);
        });

        it("should copy functions", function() {
            Ext.apply(origin, {
                method: function() {
                    this.newMethodCalled = true;
                }
            });

            origin.method();

            expect(origin.myMethodCalled).not.toBeDefined();
            expect(origin.newMethodCalled).toBeTruthy();
        });

        it("should copy non-enumerables", function() {
            Ext.apply(origin, {
                toString: function() {
                    this.newToStringCalled = true;
                }
            });

            origin.toString();

            expect(origin.myToStringCalled).not.toBeDefined();
            expect(origin.newToStringCalled).toBeTruthy();
        });

        it("should apply properties and return an object", function() {
            o = Ext.apply({}, {
                foo: 1,
                bar: 2
            });

            expect(o).toEqual({
                foo: 1,
                bar: 2
            });
        });

        it("should change the reference of the object", function() {
            o = {};
            Ext.apply(o, {
                opt1: 'x',
                opt2: 'y'
            });

            expect(o).toEqual({
                opt1: 'x',
                opt2: 'y'
            });
        });

        it("should overwrite properties", function() {
            o = Ext.apply({
                foo: 1,
                baz: 4
            }, {
                foo: 2,
                bar: 3
            });

            expect(o).toEqual({
                foo: 2,
                bar: 3,
                baz: 4
            });
        });

        it("should use default", function() {
            o = {};

            Ext.apply(o, {
                foo: 'new',
                exist: true
            }, {
                foo: 'old',
                def: true
            });

            expect(o).toEqual({
                foo: 'new',
                def: true,
                exist: true
            });
        });

        it("should override all defaults", function() {
            o = Ext.apply({}, {
                foo: 'foo',
                bar: 'bar'
            }, {
                foo: 'oldFoo',
                bar: 'oldBar'
            });

            expect(o).toEqual( {
                foo: 'foo',
                bar: 'bar'
            });
        });

        it("should return null if null is passed as first argument", function() {
           expect(Ext.apply(null, {})).toBeNull();
        });

        it("should return the object if second argument is no defined", function() {
            o = {
                foo: 1
            };
            expect(Ext.apply(o)).toEqual(o);
        });

        it("should override valueOf", function() {
            o = Ext.apply({}, {valueOf: 1});

            expect(o.valueOf).toEqual(1);
        });

        it("should override toString", function() {
            o = Ext.apply({}, {toString: 3});

            expect(o.toString).toEqual(3);

        });
    });

    describe("Ext.emptyFn", function() {
        it("should return undefined without params", function() {
            expect(Ext.emptyFn()).toBeUndefined();
        });
        
        it("should return undefined if you pass params", function() {
           expect(Ext.emptyFn('aaaa', 'bbbbb')).toBeUndefined(); 
        });
    });

    describe("Ext.iterate", function() {
        var itFn;

        beforeEach(function() {
            itFn = jasmine.createSpy();
        });

        describe("iterate object", function() {
            var o;

            beforeEach(function() {
                o = {
                    n1: 11,
                    n2: 13,
                    n3: 18
                };
            });

            describe("if itFn does not return false", function() {
                beforeEach(function() {
                    Ext.iterate(o, itFn);
                });

                it("should call the iterate function 3 times", function () {
                    expect(itFn.callCount).toEqual(3);
                });

                it("should call the iterate function with correct arguments", function () {
                    expect(itFn.calls[0].args).toEqual(["n1", 11, o]);
                    expect(itFn.calls[1].args).toEqual(["n2", 13, o]);
                    expect(itFn.calls[2].args).toEqual(["n3", 18, o]);
                });
            });

            describe("if itFn return false", function() {
                beforeEach(function() {
                    itFn.andReturn(false);
                    Ext.iterate(o, itFn);
                });

                it("should stop iteration if function return false", function() {
                    itFn.andReturn(false);

                    expect(itFn.calls.length).toEqual(1);
                });
            });
        });

        describe("do nothing on an empty object", function() {
            var o;

            beforeEach(function() {
                o = {};
                Ext.iterate(o, itFn);
            });

            it("should not call the iterate function", function () {
                expect(itFn).not.toHaveBeenCalled();
            });

        });

        describe("iterate array", function() {
            var arr;

            beforeEach(function() {
                arr = [6, 7, 8, 9];
            });

            describe("if itFn does not return false", function() {
                beforeEach(function() {
                    Ext.iterate(arr, itFn);
                });

                it("should call the iterate function 4 times", function () {
                    expect(itFn.callCount).toEqual(4);
                });

                it("should call the iterate function with correct arguments", function () {
                    expect(itFn.calls[0].args).toEqual([6, 0, arr]);
                    expect(itFn.calls[1].args).toEqual([7, 1, arr]);
                    expect(itFn.calls[2].args).toEqual([8, 2, arr]);
                    expect(itFn.calls[3].args).toEqual([9, 3, arr]);
                });
             });

            describe("if itFn return false", function() {
                beforeEach(function() {
                    itFn.andReturn(false);
                    Ext.iterate(arr, itFn);
                });

                it("should stop iteration if function return false", function() {
                    itFn.andReturn(false);

                    expect(itFn.calls.length).toEqual(1);
                });
            });
        });

        describe("do nothing on an empty array", function() {
            var arr;

            beforeEach(function() {
                arr = [];
                Ext.iterate(arr, itFn);
            });

            it("should not call the iterate function", function () {
                expect(itFn).not.toHaveBeenCalled();
            });

        });
    });

    describe("Ext.applyIf", function(){
        var o;

        it("should apply properties and return an object with an empty destination object", function() {
            o = Ext.applyIf({}, {
                foo: 'foo',
                bar: 'bar'
            });

            expect(o).toEqual( {
                foo: 'foo',
                bar: 'bar'
            });
        });

        it("should not override default properties", function() {
            o = Ext.applyIf({
                foo: 'foo'
            }, {
                foo: 'oldFoo'
            });

            expect(o).toEqual({
                foo: 'foo'
            });
        });

        it("should not override default properties with mixing properties", function() {
            o = Ext.applyIf({
                foo: 1,
                bar: 2
            }, {
                bar: 3,
                baz: 4
            });

            expect(o).toEqual({
                foo: 1,
                bar: 2,
                baz: 4
            });
        });

          it("should change the reference of the object", function() {
            o = {};
            Ext.applyIf(o, {
                foo: 2
            }, {
                foo: 1
            });

            expect(o).toEqual({
                foo: 2
            });
        });

        it("should return null if null is passed as first argument", function() {
           expect(Ext.applyIf(null, {})).toBeNull();
        });

        it("should return the object if second argument is no defined", function() {
            o = {
                foo: 1
            };

            expect(Ext.applyIf(o)).toEqual(o);
        });
    });


    describe("Ext.extend", function() {
        var Dude, Awesome, david;

        beforeEach(function() {
            Dude = Ext.extend(Object, {
                constructor: function(config){
                    Ext.apply(this, config);
                    this.isBadass = false;
                }
            });

            Awesome = Ext.extend(Dude, {
                constructor: function(){
                    Awesome.superclass.constructor.apply(this, arguments);
                    this.isBadass = true;
                }
            });

            david = new Awesome({
                davis: 'isAwesome'
            });
        });

        it("should throw an error if superclass isn't defined", function() {
            expect(function() {
                Ext.extend(undefined, {});
            }).toRaiseExtError("Attempting to extend from a class which has not been loaded on the page.");
        });

        it("should create a superclass that return the original classe", function() {
            expect(david.superclass).toEqual(Dude.prototype);
        });

        it("should add override method", function() {
            expect(typeof david.override === 'function').toBe(true);
        });

        it("should override redefined methods", function() {
            expect(david.isBadass).toBe(true);
        });

        it("should keep new properties", function() {
            expect(david.davis).toEqual('isAwesome');
        });
    });

    describe("Ext.override", function(){
        var Dude,
            extApplySpy;

        beforeEach(function(){
            Dude = function(){}; // avoid to directly override Object class
            extApplySpy = spyOn(Ext, "apply");
        });

        it("should apply override", function(){
            var override = {foo: true};

            Ext.override(Dude, override);

            expect(extApplySpy).toHaveBeenCalledWith(Dude.prototype, override);
        });
    });

    describe("Ext.valueFrom", function() {
        var value, defaultValue;
        
        describe("with allowBlank", function() {
            describe("and an empty string", function() {
                it("should return the value", function() {
                    expect(Ext.valueFrom('', 'aaa', true)).toBe('');
                });
            });
            
            describe("and a string", function() {
                it("should return the value", function() {
                    expect(Ext.valueFrom('bbb', 'aaa', true)).toBe('bbb');
                });
            });
            
            describe("and an undefined value", function() {
                it("should return the default value", function() {
                    expect(Ext.valueFrom(undefined, 'aaa', true)).toBe('aaa');
                });
            });
            
            describe("and a null value", function() {
                it("should return the default value", function() {
                    expect(Ext.valueFrom(null, 'aaa', true)).toBe('aaa');
                });
            });
            
            describe("and a 0 value", function() {
                it("should return the value", function() {
                    expect(Ext.valueFrom(0, 'aaa', true)).toBe(0);
                });
            });
        });
        
        describe("without allowBlank", function() {
            describe("and an empty string", function() {
                it("should return the default value", function() {
                    expect(Ext.valueFrom('', 'aaa')).toBe('aaa');
                });
            });
            
            describe("and a string", function() {
                it("should return the value", function() {
                    expect(Ext.valueFrom('bbb', 'aaa')).toBe('bbb');
                });
            });
            
            describe("and an undefined value", function() {
                it("should return the default value", function() {
                    expect(Ext.valueFrom(undefined, 'aaa')).toBe('aaa');
                });
            });
            
            describe("and a null value", function() {
                it("should return the default value", function() {
                    expect(Ext.valueFrom(null, 'aaa')).toBe('aaa');
                });
            });
            
            describe("and a 0 value", function() {
                it("should return the value", function() {
                    expect(Ext.valueFrom(0, 'aaa')).toBe(0);
                });
            });
        });
    });
    
    describe("Ext.typeOf", function() {
        it("should return null", function() {
            expect(Ext.typeOf(null)).toEqual('null');
        });
        it("should return undefined", function() {
            expect(Ext.typeOf(undefined)).toEqual('undefined');
        });
        it("should return undefined", function() {
            expect(Ext.typeOf(window.someWeirdPropertyThatDoesntExist)).toEqual('undefined');
        });
        it("should return string", function() {
            expect(Ext.typeOf('')).toEqual('string');
        });
        it("should return string", function() {
            expect(Ext.typeOf('something')).toEqual('string');
        });
        it("should return string", function() {
            expect(Ext.typeOf('1.2')).toEqual('string');
        });
        it("should return number", function() {
            expect(Ext.typeOf(1)).toEqual('number');
        });
        it("should return number", function() {
            expect(Ext.typeOf(1.2)).toEqual('number');
        });
        it("should return boolean", function() {
            expect(Ext.typeOf(true)).toEqual('boolean');
        });
        it("should return boolean", function() {
            expect(Ext.typeOf(false)).toEqual('boolean');
        });
        it("should return array", function() {
            expect(Ext.typeOf([1,2,3])).toEqual('array');
        });
        it("should return array", function() {
            expect(Ext.typeOf(new Array(1,2,3))).toEqual('array');
        });
        it("should return functi