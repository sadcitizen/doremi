var obj = require('../build/object.min');
var is = require('../build/is.min');
var expect = require('chai').expect;

describe('Object', function () {
    describe('.deepGet()', function () {
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
            expect(obj.deepGet(lorem, 'lorem.ipsum.dolor.sit')).to.equal('amet');
            expect(obj.deepGet(lorem, 'lorem.foo')).to.be.a('function');
            expect(obj.deepGet(lorem, 'lorem.foo')()).to.equal('bar');
            expect(obj.deepGet(foo, 'foo.foo')).to.deep.equal({ foo: 'foo' });
            expect(obj.deepGet(foo, 'foo.foo.foo')).to.equal('foo');
        });

        it('Should not return value of non existent property', function () {
            expect(obj.deepGet(foo, '')).to.equal(undefined);
            expect(obj.deepGet(lorem, 'lorem.ipsum.foo')).to.equal(undefined);
            expect(obj.deepGet(foo, 'foo.foo.foo.foo.foo.foo')).to.equal(undefined);
        });

        it('Should return default value of non existent property', function () {
            expect(obj.deepGet(foo, '', true)).to.equal(true);
            expect(obj.deepGet(lorem, 'lorem.ipsum.foo', 42)).to.equal(42);
            expect(obj.deepGet(foo, 'foo.foo.foo.foo.foo.foo', 'foo')).to.equal('foo');
        });
    });

    describe('.deepSet()', function () {
        it('Should sets value for nested properties', function () {
            var lorem = {};
            obj.deepSet(lorem, 'ipsum.dolor.sit', 42);
            obj.deepSet(lorem, 'ipsum.dolor.foo', 'bar');

            expect(lorem.ipsum.dolor.sit).to.equal(42);
            expect(lorem.ipsum.dolor.foo).to.equal('bar');
        });

        it('Should sets value for not nested properties', function () {
            var lorem = {};
            obj.deepSet(lorem, 'ipsum', 42);
            obj.deepSet(lorem, 'foo', 'bar');

            expect(lorem.ipsum).to.equal(42);
            expect(lorem.foo).to.equal('bar');
        });
    });

    describe('.has()', function () {
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

        it('Should return true if object has property', function () {
            expect(obj.has(lorem, 'constructor')).to.equal(true);
            expect(obj.has(lorem, 'valueOf')).to.equal(true);
            expect(obj.has(lorem, 'toString')).to.equal(true);
            expect(obj.has(lorem, 'bar')).to.equal(true);
            expect(obj.has(lorem, 'bar.constructor')).to.equal(true);
            expect(obj.has(lorem, 'bar.valueOf')).to.equal(true);
            expect(obj.has(lorem, 'bar.toString')).to.equal(true);
            expect(obj.has(lorem, 'lorem.ipsum')).to.equal(true);
            expect(obj.has(lorem, 'lorem.ipsum.dolor')).to.equal(true);
            expect(obj.has(lorem, 'lorem.ipsum.dolor.sit')).to.equal(true);
            expect(obj.has(lorem, 'lorem.ipsum.constructor')).to.equal(true);
        });

        it('Should return undefined if objext has no property', function () {
            expect(obj.has(lorem, 'foo')).to.equal(false);
            expect(obj.has(lorem, 'lorem.dolor')).to.equal(false);
            expect(obj.has(lorem, 'lorem.ipsum.sit')).to.equal(false);
            expect(obj.has(lorem, 'lorem.ipsum.dolor.bar')).to.equal(false);
        });
    });

    describe('.hasOwn()', function () {
        var object;

        before(function () {
            object = {
                a: 'b',
                c: 'd',
                toString: 'toString',
                /* jshint -W001 */
                hasOwnProperty: 'hasOwnProperty'
                /* jshint +W001 */
            };
        });

        it('Should return true if object has property', function () {
            expect(obj.hasOwn(object, 'a')).to.equal(true);
            expect(obj.hasOwn(object, 'c')).to.equal(true);
            expect(obj.hasOwn(object, 'toString')).to.equal(true);
            expect(obj.hasOwn(object, 'hasOwnProperty')).to.equal(true);
        });

        it('Should return undefined if object has no property', function () {
            expect(obj.hasOwn(object, 'constructor')).to.equal(false);
            expect(obj.hasOwn(object, 'valueOf')).to.equal(false);
            expect(obj.hasOwn(object, 'toLocaleString')).to.equal(false);
        });
    });

    describe('.keys()', function () {
        it('Should return array of all own enumerable property names', function () {
            var object = { a: 'b', c: 'd', e: 'f' };
            expect(obj.keys(object)).to.deep.equal(['a', 'c', 'e']);
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

            expect(obj.keys(new Point(0, 0))).to.deep.equal(['x', 'y']);
        });
    });

    describe('.ns()', function () {
        it('Should creates not existent nested properties', function () {
            var lorem = {};
            obj.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum)).to.equal(true);
            expect(is.defined(lorem.ipsum.dolor)).to.equal(true);
            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ sit: {} });
        });

        it('Should reuse existent nested properties', function () {
            var lorem = { ipsum: { dolor: { foo: 'bar' } } };
            obj.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { foo: 'bar', sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ foo: 'bar', sit: {} });
        });

        it('Should override existent nested property if it is not an object', function () {
            var lorem = { ipsum: 'dolor' };
            obj.ns(lorem, 'ipsum.dolor.sit');

            expect(is.defined(lorem.ipsum.dolor.sit)).to.equal(true);

            expect(lorem.ipsum).to.deep.equal({ dolor: { sit: {} } });
            expect(lorem.ipsum.dolor).to.deep.equal({ sit: {} });
        });

        it('Should return an empty object', function () {
            var lorem = {};

            expect(obj.ns(lorem, 'ipsum.dolor.sit')).to.equal(lorem.ipsum.dolor.sit);
            expect(obj.ns(lorem, 'ipsum.dolor.sit')).to.deep.equal({});
        });
    });

    describe('.pairs()', function () {
        it('Should return array of key-value pairs', function () {
            var object = { a: 'b', c: 'd', e: 'f' };
            expect(obj.pairs(object)).to.deep.equal([
                ['a', 'b'],
                ['c', 'd'],
                ['e', 'f']
            ]);
            expect(obj.pairs(object, 'a', 'c')).to.deep.equal([
                ['a', 'b'],
                ['c', 'd']
            ]);
        });

        it('Should return array of key-value pairs for nested properties', function () {
            var object = {
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
            expect(obj.pairs(object, 'a', 'e.f')).to.deep.equal([
                ['a', 'b'],
                ['e.f', 'g']
            ]);
            expect(obj.pairs(object, 'c', 'h.i', 'h.k')).to.deep.equal([
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

            expect(obj.pairs(new Point(0, 0))).to.deep.equal([
                ['x', 0],
                ['y', 0]
            ]);
            expect(obj.pairs(new Point(42, 0), 'x')).to.deep.equal([
                ['x', 42]
            ]);
            expect(obj.pairs(new Point(0, 42), 'y')).to.deep.equal([
                ['y', 42]
            ]);
        });
    });

    describe('.prop()', function () {
        it('Should return the value from an object by property name', function () {
            var object = { a: 'b', c: 'd', e: 'f' };

            expect(obj.prop('a')(object)).to.equal('b');
            expect(obj.prop('c')(object)).to.equal('d');
            expect(obj.prop('e')(object)).to.equal('f');
        });

        it('Should return the given default value from an object by non existent property name', function () {
            var object = { a: 'b' };

            expect(obj.prop('c', 'd')(object)).to.equal('d');
            expect(obj.prop('e', 'f')(object)).to.equal('f');
        });
    });

    describe('.result()', function () {
        var object;

        before(function () {
            object = {
                attr: 'value',
                arr: [0, 1, 2],
                num: 2,
                falsey: '',
                method: function () {
                    return this.attr;
                }
            };
        });

        it('Should return nothing for undefined object properties.', function () {
            expect(obj.result(object, 'some')).to.equal(undefined);
        });

        it('Should return default value if property on an object is undefined.', function () {
            expect(obj.result(object, 'some', true)).to.equal(true);
            expect(obj.result(object, 'other', 42)).to.equal(42);
        });

        it('Should evaluate a method with object context and return its result.', function () {
            expect(obj.result(object, 'method')).to.equal('value');
        });

        it('Should evaluate an attribute and return its result.', function () {
            expect(obj.result(object, 'attr')).to.equal('value');
            expect(obj.result(object, 'falsey')).to.equal('');
            expect(obj.result(object, 'arr')).to.deep.equal([0, 1, 2]);
        });
    });

    describe('.template()', function () {
        var target, source, result;

        it('Should work with plain objects.', function () {
            target = {a: '${a}', b: '${b}', c: '${c}'};
            source = {a: 1, b: 5, c: 3};
            result = {a: 1, b: 5, c: 3};
            expect(obj.template(target, source)).to.deep.equal(result);
        });

        it('Should work with nested attributes.', function () {
            target = {a: '${a.c}', b: '${b.e}', c: '${f}', d: {e: '${d.e}'}, f: 'some value'};
            source = {a: {c: 'lorem'}, b: {e: 'ipsum'}, c: 3, d: {e: 4}, f: 'dolor', g: {h: {i: {j: 'sit'}}}};
            result = {a: 'lorem', b: 'ipsum', c: 'dolor', d: {e: 4}, f: 'some value'};
            expect(obj.template(target, source)).to.deep.equal(result);
        });

        it('Should work with arrays.', function () {
            target = ['${a}', '${b}', '${c}', '${d.e}'];
            source = {a: 'lorem', b: 'ipsum', c: 'sit', d: {e: 'dolor'}};
            result = ['lorem', 'ipsum', 'sit', 'dolor'];
            expect(obj.template(target, source)).to.deep.equal(result);
        });

        it('Should work with arrays as source.', function () {
            target = ['${1}', '${0}', '${3}', '${2.e}'];
            source = [1, '2', {e: 3}, null];
            result = ['2', 1, null, 3];
            expect(obj.template(target, source)).to.deep.equal(result);
        });

        it('Should not replace undefined values.', function () {
            target = {a: '${a}', b: '${b}', c: '${c}', d: '${d}'};
            source = {a: 1, b: 5, c: 3};
            result = {a: 1, b: 5, c: 3, d: '${d}'};
            expect(obj.template(target, source)).to.deep.equal(result);
        });

        it('Should work with mustache syntax.', function () {
            target = {a: '{{a}}', b: '{{b}}', c: '{{c}}'};
            source = {a: 1, b: 5, c: 3};
            result = {a: 1, b: 5, c: 3};
            expect(obj.template(target, source, /{{([^}]+)}}/g)).to.deep.equal(result);
        });

        it('Should work with underscore syntax.', function () {
            target = {a: '<%= a %>', b: '<%= b %>', c: '<%= c %>'};
            source = {a: 1, b: 5, c: 3};
            result = {a: 1, b: 5, c: 3};
            expect(obj.template(target, source, /<%=([^<%=>]+?)%>/g)).to.deep.equal(result);
        });
    });

    describe('.values()', function () {
        it('Should return array of own enumerable property values', function () {
            var object = { a: 'b', c: 'd', e: 'f' };
            expect(obj.values(object)).to.deep.equal(['b', 'd', 'f']);
            expect(obj.values(object, 'a', 'c')).to.deep.equal(['b', 'd']);
        });

        it('Should return array of own nested enumerable property values', function () {
            var object = {
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
            expect(obj.values(object, 'a', 'e.f')).to.deep.equal(['b', 'g']);
            expect(obj.values(object, 'c', 'h.i', 'h.k')).to.deep.equal(['d', 'j', 'l']);
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

            expect(obj.values(new Point(0, 0))).to.deep.equal([0, 0]);
            expect(obj.values(new Point(42, 0), 'x')).to.deep.equal([42]);
            expect(obj.values(new Point(0, 42), 'y')).to.deep.equal([42]);
        });
    });
});