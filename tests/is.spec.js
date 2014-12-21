var is = require('../build/min/mint.is.min');
var expect = require('chai').expect;

describe('is.equal()', function () {
    it('Two absent args should be equal', function () {
        expect(is.equal()).to.equal(true);
    });

    it('One absent arg and undefined should be equal', function () {
        expect(is.equal(undefined)).to.equal(true);
    });

    it('Undefined should be equal to undefined', function () {
        expect(is.equal(undefined, undefined)).to.equal(true);
    });

    it('Null should be equal to null', function () {
        expect(is.equal(null, null)).to.equal(true);
    });

    it('Undefined should not be equal to null', function () {
        expect(is.equal(undefined, null)).to.equal(false);
    });

    it('True should be equal to true', function () {
        expect(is.equal(true, true)).to.equal(true);
    });

    it('False should be equal to false', function () {
        expect(is.equal(false, false)).to.equal(true);
    });

    it('True should not be equal to false', function () {
        expect(is.equal(true, false)).to.equal(false);
    });

    it('NaN should be equal to NaN', function () {
        expect(is.equal(NaN, NaN)).to.equal(true);
    });

    it('Zero should be equal to zero', function () {
        expect(is.equal(0, 0)).to.equal(true);
    });

    it('Zero should not be equal to negative zero', function () {
        expect(is.equal(0, -0)).to.equal(false);
    });

    it('Infinity should be equal to infinity', function () {
        expect(is.equal(Infinity, Infinity)).to.equal(true);
    });

    it('Infinity should not be equal to negative infinity', function () {
        expect(is.equal(Infinity, -Infinity)).to.equal(false);
    });

    it('42 should be equal to 42', function () {
        expect(is.equal(42, 42)).to.equal(true);
    });

    it('42 should not be equal to -42', function () {
        expect(is.equal(42, -42)).to.equal(false);
    });

    it('Empty string should be equal to empty string', function () {
        expect(is.equal('', '')).to.equal(true);
    });

    it('String should be equal to yourself', function () {
        expect(is.equal('foo', 'foo')).to.equal(true);
    });

    it('String should not be equal to different string', function () {
        expect(is.equal('foo', 'bar')).to.equal(false);
    });
});

describe('is.exists()', function () {
    it('Should return false for undefined', function () {
        expect(is.exists()).to.equal(false);
        expect(is.exists(undefined)).to.equal(false);
    });

    it('Should return false for null', function () {
        expect(is.exists(null)).to.equal(false);
    });

    it('Should return true for other values', function () {
        expect(is.exists(0)).to.equal(true);
        expect(is.exists(42)).to.equal(true);
        expect(is.exists(-42)).to.equal(true);
        expect(is.exists(NaN)).to.equal(true);
        expect(is.exists(Infinity)).to.equal(true);
        expect(is.exists(-Infinity)).to.equal(true);
        expect(is.exists(true)).to.equal(true);
        expect(is.exists(false)).to.equal(true);
        expect(is.exists('')).to.equal(true);
        expect(is.exists('hello')).to.equal(true);
        expect(is.exists([])).to.equal(true);
        expect(is.exists([1, 2, 3])).to.equal(true);
        expect(is.exists({})).to.equal(true);
        expect(is.exists({a: 'b', c: 'd'})).to.equal(true);
    });
});

describe('is.float()', function () {
    it('Should return true for float', function () {
        expect(is.float(42.42)).to.equal(true);
    });

    it('Should return false for other numbers', function () {
        expect(is.float(42)).to.equal(false);
        expect(is.float(0)).to.equal(false);
    });
});

describe('is.int()', function () {
    it('Should return true for integer', function () {
        expect(is.int(42)).to.equal(true);
    });

    it('Should return true for zero', function () {
        expect(is.int(0)).to.equal(true);
    });

    it('Should return false for float', function () {
        expect(is.int(42.42)).to.equal(false);
    });
});

describe('is.primitive()', function () {
    it('Boolean should be primitive', function () {
        expect(is.primitive(true)).to.equal(true);
        expect(is.primitive(false)).to.equal(true);
        /* jshint -W053 */
        expect(is.primitive(new Boolean(false))).to.equal(true);
        /* jshint +W053 */
        expect(is.primitive(Boolean(true))).to.equal(true);
    });

    it('String should be primitive', function () {
        expect(is.primitive('foo')).to.equal(true);
        /* jshint -W053 */
        expect(is.primitive(new String('foo'))).to.equal(true);
        /* jshint +W053 */
        expect(is.primitive(String('foo'))).to.equal(true);
        expect(is.primitive('')).to.equal(true);
    });

    it('Number should be primitive', function () {
        expect(is.primitive(42)).to.equal(true);
        /* jshint -W053 */
        expect(is.primitive(new Number(42))).to.equal(true);
        /* jshint +W053 */
        expect(is.primitive(Number(42))).to.equal(true);
        expect(is.primitive(0)).to.equal(true);
        expect(is.primitive(-0)).to.equal(true);
    });

    it('Null should be primitive', function () {
        expect(is.primitive(null)).to.equal(true);
    });

    it('Undefined should be primitive', function () {
        expect(is.primitive(undefined)).to.equal(true);
        expect(is.primitive()).to.equal(true);
    });
});

describe('is.type()', function () {
    it('Should return a type of value', function () {
        expect(is.type(arguments)).to.equal('arguments');

        expect(is.type([])).to.equal('array');
        expect(is.type([1, 2, 3])).to.equal('array');
        expect(is.type(new Array(1, 2, 3))).to.equal('array');

        expect(is.type(true)).to.equal('boolean');
        expect(is.type(false)).to.equal('boolean');
        /* jshint -W053 */
        expect(is.type(new Boolean(false))).to.equal('boolean');
        /* jshint +W053 */
        expect(is.type(Boolean(true))).to.equal('boolean');

        expect(is.type(new Date())).to.equal('date');

        expect(is.type(function () {
        })).to.equal('function');
        /* jshint -W054 */
        expect(is.type(new Function('return true'))).to.equal('function');
        /* jshint +W054 */
        expect(is.type(Math.abs)).to.equal('function');

        expect(is.type(undefined)).to.equal('undefined');

        expect(is.type(NaN)).to.equal('nan');

        expect(is.type(42)).to.equal('number');
        /* jshint -W053 */
        expect(is.type(new Number(42))).to.equal('number');
        /* jshint +W053 */
        expect(is.type(Number(42))).to.equal('number');
        expect(is.type(0)).to.equal('number');
        expect(is.type(-0)).to.equal('number');

        expect(is.type(Infinity)).to.equal('infinity');

        expect(is.type(null)).to.equal('null');

        expect(is.type({})).to.equal('object');

        expect(is.type(/\s+/ig)).to.equal('regexp');
        expect(is.type(new RegExp('\\s+', 'ig'))).to.equal('regexp');

        expect(is.type('foo')).to.equal('string');
        /* jshint -W053 */
        expect(is.type(new String('foo'))).to.equal('string');
        /* jshint +W053 */
        expect(is.type(String('foo'))).to.equal('string');
        expect(is.type('')).to.equal('string');
    });
});
