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