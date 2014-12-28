var object = require('../src/object');
var expect = require('chai').expect;

describe('object.get()', function () {
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
        expect(object.get(lorem, 'lorem.ipsum.dolor.sit')).to.equal('amet');
        expect(object.get(lorem, 'lorem.foo')).to.be.a('function');
        expect(object.get(lorem, 'lorem.foo')()).to.equal('bar');
        expect(object.get(foo, 'foo.foo')).to.deep.equal({ foo: 'foo' });
        expect(object.get(foo, 'foo.foo.foo')).to.equal('foo');
    });

    it('Should not return value of nonexistent property', function () {
        expect(object.get(foo, '')).to.equal(undefined);
        expect(object.get(lorem, 'lorem.ipsum.foo')).to.equal(undefined);
        expect(object.get(foo, 'foo.foo.foo.foo.foo.foo')).to.equal(undefined);
    });
});

describe('object.result()', function () {
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

    it('Should return nothing for undefined object properties.', function() {
        expect(object.result(obj, 'some')).to.equal(undefined);
    });

    it('Should return default value if property on an object is undefined', function() {
        expect(object.result(obj, 'some', true)).to.equal(true);
        expect(object.result(obj, 'other', 42)).to.equal(42);
    });

    it('Should evaluate a method with object context and return its result.', function() {
        expect(object.result(obj, 'method')).to.equal('value');
    });

    it('Should evaluate an attribute and return its result.', function() {
        expect(object.result(obj, 'attr')).to.equal('value');
        expect(object.result(obj, 'falsey')).to.equal('');
        expect(object.result(obj, 'arr')).to.deep.equal([0, 1, 2]);
    });
});