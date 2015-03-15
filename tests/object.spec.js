var ob = require('../build/object.min');
var is = require('../build/is.min');
var expect = require('chai').expect;

describe('ob', function () {
    describe('ob.deepGet()', function () {
        var lorem, foo;

        before(function () {
            lorem = {
                lorem: {
                    ipsum: {
                        dolor: {
                            sit: 'amet'
                        }
                    },
                    foo: function () {
                        return 'bar';
                    }
                }
            };
            foo = {
                foo: {
                    foo: {
                        foo: 'foo'
                    }
                }
            };
        });

        it('Should return value of nested property', function () {
            expect(ob.deepGet(lorem, 'lorem.ipsum.dolor.sit')).to.equal('amet');
            expect(ob.deepGet(lorem, 'lorem.foo')).to.be.a('function');
            expect(ob.deepGet(lorem, 'lorem.foo')()).to.equal('bar');
            expect(ob.deepGet(foo, 'foo.foo')).to.deep.equal({ foo: 'foo' });
            expect(ob.deepGet(foo, 'foo.foo.foo')).to.equal('foo');
        });

        it('Should not return value of non existent property', function () {
            expect(ob.deepGet(foo, '')).to.equal(undefined);
            expect(ob.deepGet(lorem, 'lorem.ipsum.foo')).to.equal(undefined);
            expect(ob.deepGet(foo, 'foo.foo.foo.foo.foo.foo')).to.equal(undefined);
        });

        it('Should return default value of non existent property', function () {
            expect(ob.deepGet(foo, '', true)).to.equal(true);
            expect(ob.deepGet(lorem, 'lorem.ipsum.foo', 42)).to.equal(42);
            expect(ob.deepGet(foo, 'foo.foo.foo.foo.foo.foo', 'foo')).to.equal('foo');
        });
    });

    describe('ob.has()', function () {
        var lorem;

        before(function () {
            lorem = {
                lorem: {
                    ipsum: {
                        dolor: {
                            sit: 'amet'
                        }
                    },
                    foo: function () {
                        return 'bar';
                    }
                },
                bar: 42
            };
        });

        it('Should return true if ob has property', function () {
            expect(ob.has(lorem, 'constructor')).to.equal(true);
            expect(ob.has(lorem, 'valueOf')).to.equal(true);
            expect(ob.has(lorem, 'toString')).to.equal(true);
            expect(ob.has(lorem, 'bar')).to.equal(true);
            expect(ob.has(lorem, 'bar.constructor')).to.equal(true);
            expect(ob.has(lorem, 'bar.valueOf')).to.equal(true);
            expect(ob.has(lorem, 'bar.toString')).to.equal(true);
            expect(ob.has(lorem, 'lorem.ipsum')).to.equal(true);
            expect(ob.has(lorem, 'lorem.ipsum.dolor')).to.equal(true);
            expect(ob.has(lorem, 'lorem.ipsum.dolor.sit')).to.equal(true);
            expect(ob.has(lorem, 'lorem.ipsum.constructor')).to.equal(true);
        });

        it('Should return undefined if ob has no property', function () {
            expect(ob.has(lorem, 'foo')).to.equal(false);
            expect(ob.has(lorem, 'lorem.dolor')).to.equal(false);
            expect(ob.has(lorem, 'lorem.ipsum.sit')).to.equal(false);
            expect(ob.has(lorem, 'lorem.ipsum.dolor.bar')).to.equal(false);
        });
    });

    describe('ob.hasOwn()', function () {
        var obj;

        before(function () {
            obj = {
                a: 'b',
                c: 'd',
                toString: 'toString',
                /* jshint -W001 */
                hasOwnProperty: 'hasOwnProperty'
                /* jshint +W001 */
            };
        });

        it('Should return true if ob has property', function () {
            expect(ob.hasOwn(obj, 'a')).to.equal(true);
            expect(ob.hasOwn(obj, 'c')).to.equal(true);
            expect(ob.hasOwn(obj, 'toString')).to.equal(true);
            expect(ob.hasOwn(obj, 'hasOwnProperty')).to.equal(true);
        });

        it('Should return undefined if ob has no property', function () {
            expect(ob.hasOwn(obj, 'constructor')).to.equal(false);
            expect(ob.hasOwn(obj, 'valueOf')).to.equal(false);
            expect(ob.hasOwn(obj, 'toLocaleString')).to.equal(false);
        });
    });

    describe('ob.keys()', function () {
        it('Should return array of all own enumerable property names', function () {
            var obj = { a: 'b', c: 'd', e: 'f' };
            expect(ob.keys(obj)).to.deep.equal(['a', 'c', 'e']);
        });

        it('Should avoid properties from prototype', function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }

            Point.prototype.getCoords = function () {
                return [this.x, this.y];
            };

            Point.prototype.z = 0;

            expect(ob.keys(new Point(0, 0))).to.deep.equal(['x', 'y']);
        });
    });

    describe('ob.ns()', function () {
        it('Should creates not existent nested properties', function () {
            var lorem = {};
            ob.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum)).to.equal(true);
            expect(is.defined(lorem.ipsum.dolor)).to.equal(true);
            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ sit: {} });
        });

        it('Should reuse existent nested properties', function () {
            var lorem = { ipsum: { dolor: { foo: 'bar' } } };
            ob.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { foo: 'bar', sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ foo: 'bar', sit: {} });
        });

        it('Should override existent nested property if it is not an ob', function () {
            var lorem = { ipsum: 'dolor' };
            ob.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ sit: {} });
        });

        it('Should return an empty ob', function () {
            var lorem = {};

            expect(ob.ns(lorem, 'ipsum.dolor.sit')).to.equal(lorem.ipsum.dolor.sit);
            expect(ob.ns(lorem, 'ipsum.dolor.sit')).to.deep.equal({});
        });
    });

    describe('ob.pairs()', function () {
        it('Should return array of key-value pairs', function () {
            var obj = { a: 'b', c: 'd', e: 'f' };
            expect(ob.pairs(obj)).to.deep.equal([
                ['a', 'b'],
                ['c', 'd'],
                ['e', 'f']
            ]);
            expect(ob.pairs(obj, 'a', 'c')).to.deep.equal([
                ['a', 'b'],
                ['c', 'd']
            ]);
        });

        it('Should return array of key-value pairs for nested properties', function () {
            var obj = {
                a: 'b',
                c: 'd',
                e: {
                    f: 'g'
                },
                h: {
                    i: 'j',
                    k: 'l'
                }
            };
            expect(ob.pairs(obj, 'a', 'e.f')).to.deep.equal([
                ['a', 'b'],
                ['e.f', 'g']
            ]);
            expect(ob.pairs(obj, 'c', 'h.i', 'h.k')).to.deep.equal([
                ['c', 'd'],
                ['h.i', 'j'],
                ['h.k', 'l']
            ]);
        });

        it('Should avoid properties from prototype', function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }

            Point.prototype.getCoords = function () {
                return [this.x, this.y];
            };

            Point.prototype.z = 0;

            expect(ob.pairs(new Point(0, 0))).to.deep.equal([
                ['x', 0],
                ['y', 0]
            ]);
            expect(ob.pairs(new Point(42, 0), 'x')).to.deep.equal([
                ['x', 42]
            ]);
            expect(ob.pairs(new Point(0, 42), 'y')).to.deep.equal([
                ['y', 42]
            ]);
        });
    });

    describe('ob.prop()', function () {
        it('Should return the value from an ob by property name', function () {
            var obj = { a: 'b', c: 'd', e: 'f' };

            expect(ob.prop('a')(obj)).to.equal('b');
            expect(ob.prop('c')(obj)).to.equal('d');
            expect(ob.prop('e')(obj)).to.equal('f');
        });

        it('Should return the given default value from an ob by non existent property name', function () {
            var obj = { a: 'b' };

            expect(ob.prop('c', 'd')(obj)).to.equal('d');
            expect(ob.prop('e', 'f')(obj)).to.equal('f');
        });
    });

    describe('ob.result()', function () {
        var obj;

        before(function () {
            obj = {
                attr: 'value',
                arr: [0, 1, 2],
                num: 2,
                falsey: '',
                method: function () {
                    return this.attr;
                }
            };
        });

        it('Should return nothing for undefined ob properties.', function () {
            expect(ob.result(obj, 'some')).to.equal(undefined);
        });

        it('Should return default value if property on an ob is undefined', function () {
            expect(ob.result(obj, 'some', true)).to.equal(true);
            expect(ob.result(obj, 'other', 42)).to.equal(42);
        });

        it('Should evaluate a method with ob context and return its result.', function () {
            expect(ob.result(obj, 'method')).to.equal('value');
        });

        it('Should evaluate an attribute and return its result.', function () {
            expect(ob.result(obj, 'attr')).to.equal('value');
            expect(ob.result(obj, 'falsey')).to.equal('');
            expect(ob.result(obj, 'arr')).to.deep.equal([0, 1, 2]);
        });
    });

    describe('ob.deepSet()', function () {
        it('Should sets value for nested properties', function () {
            var lorem = {};
            ob.deepSet(lorem, 'ipsum.dolor.sit', 42);
            ob.deepSet(lorem, 'ipsum.dolor.foo', 'bar');

            expect(lorem.ipsum.dolor.sit).to.equal(42);
            expect(lorem.ipsum.dolor.foo).to.equal('bar');
        });

        it('Should sets value for not nested properties', function () {
            var lorem = {};
            ob.deepSet(lorem, 'ipsum', 42);
            ob.deepSet(lorem, 'foo', 'bar');

            expect(lorem.ipsum).to.equal(42);
            expect(lorem.foo).to.equal('bar');
        });
    });

    describe('ob.values()', function () {
        it('Should return array of own enumerable property values', function () {
            var obj = { a: 'b', c: 'd', e: 'f' };
            expect(ob.values(obj)).to.deep.equal(['b', 'd', 'f']);
            expect(ob.values(obj, 'a', 'c')).to.deep.equal(['b', 'd']);
        });

        it('Should return array of own nested enumerable property values', function () {
            var obj = {
                a: 'b',
                c: 'd',
                e: {
                    f: 'g'
                },
                h: {
                    i: 'j',
                    k: 'l'
                }
            };
            expect(ob.values(obj, 'a', 'e.f')).to.deep.equal(['b', 'g']);
            expect(ob.values(obj, 'c', 'h.i', 'h.k')).to.deep.equal(['d', 'j', 'l']);
        });

        it('Should avoid properties from prototype', function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }

            Point.prototype.getCoords = function () {
                return [this.x, this.y];
            };

            Point.prototype.z = 0;

            expect(ob.values(new Point(0, 0))).to.deep.equal([0, 0]);
            expect(ob.values(new Point(42, 0), 'x')).to.deep.equal([42]);
            expect(ob.values(new Point(0, 42), 'y')).to.deep.equal([42]);
        });
    });
});