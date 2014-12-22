var is = require('../build/min/mint.is.min');
var expect = require('chai').expect;

describe('is.array()', function () {
    it('Should return true for array', function () {
        expect(is.array([])).to.equal(true);
        expect(is.array([1, 2, 3])).to.equal(true);
        expect(is.array(new Array(1, 2, 3))).to.equal(true);
    });

    it('Should return false for non-array', function () {
        expect(is.array(arguments)).to.equal(false);
        expect(is.array(void 0)).to.equal(false);
        expect(is.array(null)).to.equal(false);
        expect(is.array(true)).to.equal(false);
        expect(is.array(NaN)).to.equal(false);
        expect(is.array(42)).to.equal(false);
        expect(is.array('')).to.equal(false);
        expect(is.array({})).to.equal(false);
        expect(is.array(new Date())).to.equal(false);
        expect(is.array(/\s+/ig)).to.equal(false);
    });
});

describe('is.args()', function () {
    var fn;

    before(function () {
        fn = function () {
            return arguments;
        };
    });

    it('Should return true for arguments', function () {
        expect(is.args(arguments)).to.equal(true);
        expect(is.args(fn())).to.equal(true);
    });

    it('Should return false for non-arguments', function () {
        expect(is.args(void 0)).to.equal(false);
        expect(is.args(null)).to.equal(false);
        expect(is.args(true)).to.equal(false);
        expect(is.args(NaN)).to.equal(false);
        expect(is.args(42)).to.equal(false);
        expect(is.args('')).to.equal(false);
        expect(is.args({})).to.equal(false);
        expect(is.args([])).to.equal(false);
        expect(is.args(new Date())).to.equal(false);
        expect(is.args(/\s+/ig)).to.equal(false);
    });
});

describe('is.bool()', function () {
    it('Should return true for boolean', function () {
        expect(is.bool(true)).to.equal(true);
        expect(is.bool(Boolean(42))).to.equal(true);
        /* jshint -W053 */
        expect(is.bool(new Boolean(42))).to.equal(true);
        /* jshint +W053 */
    });

    it('Should return false for non-boolean', function () {
        expect(is.bool(arguments)).to.equal(false);
        expect(is.bool(void 0)).to.equal(false);
        expect(is.bool(null)).to.equal(false);
        expect(is.bool(NaN)).to.equal(false);
        expect(is.bool(42)).to.equal(false);
        expect(is.bool('')).to.equal(false);
        expect(is.bool([])).to.equal(false);
        expect(is.bool({})).to.equal(false);
        expect(is.bool(new Date())).to.equal(false);
        expect(is.bool(/\s+/ig)).to.equal(false);
    });
});

describe('is.defined()', function () {
    it('Should return false for undefined values', function () {
        expect(is.defined()).to.equal(false);
        expect(is.defined(void 0)).to.equal(false);
        expect(is.defined(undefined)).to.equal(false);
    });

    it('Should return true for defined values', function () {
        expect(is.defined(null)).to.equal(true);
        expect(is.defined(42)).to.equal(true);
        expect(is.defined(NaN)).to.equal(true);
        expect(is.defined(true)).to.equal(true);
        expect(is.defined('')).to.equal(true);
        expect(is.defined([])).to.equal(true);
        expect(is.defined({})).to.equal(true);
        expect(is.defined(new Date())).to.equal(true);
        expect(is.defined(/\s+/ig)).to.equal(true);
    });
});

describe('is.empty()', function () {
    var fn;

    before(function () {
        fn = function () {
            return arguments;
        };
    });

    it('Should return true for empty string', function () {
        expect(is.empty('')).to.equal(true);
    });

    it('Should return false for non-empty string', function () {
        expect(is.empty('hello')).to.equal(false);
    });

    it('Should return true for empty object', function () {
        expect(is.empty({})).to.equal(true);
    });

    it('Should return false for non-empty object', function () {
        expect(is.empty({a: 'b', c: 'd'})).to.equal(false);
    });

    it('Should return true for empty array', function () {
        expect(is.empty([])).to.equal(true);
    });

    it('Should return false for non-empty array', function () {
        expect(is.empty([1, 2, 3, 4])).to.equal(false);
    });

    it('Should return true for empty arguments', function () {
        expect(is.empty(fn())).to.equal(true);
    });

    it('Should return false for non-empty arguments', function () {
        expect(is.empty(fn(1, 2, 3, 4))).to.equal(false);
    });

    it('Should return true for non-enumerable value', function () {
        expect(is.empty(null)).to.equal(true);
        expect(is.empty(undefined)).to.equal(true);
        expect(is.empty(0)).to.equal(true);
        expect(is.empty(42)).to.equal(true);
        expect(is.empty(-42)).to.equal(true);
        expect(is.empty(NaN)).to.equal(true);
        expect(is.empty(Infinity)).to.equal(true);
        expect(is.empty(-Infinity)).to.equal(true);
        expect(is.empty(true)).to.equal(true);
        expect(is.empty(false)).to.equal(true);
    });
});

describe('is.equal()', function () {
    it('Primitive value should be equal to itself', function () {
        expect(is.equal()).to.equal(true);
        expect(is.equal(undefined, undefined)).to.equal(true);
        expect(is.equal(null, null)).to.equal(true);
        expect(is.equal(true, true)).to.equal(true);
        expect(is.equal(NaN, NaN)).to.equal(true);
        expect(is.equal(42, 42)).to.equal(true);
        expect(is.equal('', '')).to.equal(true);
    });

    it('Zero should not be equal to negative zero', function () {
        expect(is.equal(0, -0)).to.equal(false);
    });
});

describe('is.even()', function () {
    it('Should return true for even numbers', function () {
        expect(is.even(42)).to.equal(true);
        expect(is.even(-42)).to.equal(true);
        expect(is.even(0)).to.equal(true);
    });

    it('Should return false for odd numbers', function () {
        expect(is.even(21)).to.equal(false);
        expect(is.even(-21)).to.equal(false);
    });

    it('Should return false for non-numeric values', function () {
        expect(is.even(void 0)).to.equal(false);
        expect(is.even(null)).to.equal(false);
        expect(is.even(NaN)).to.equal(false);
        expect(is.even(true)).to.equal(false);
        expect(is.even('')).to.equal(false);
        expect(is.even([])).to.equal(false);
        expect(is.even({})).to.equal(false);
        expect(is.even(new Date())).to.equal(false);
        expect(is.even(/\s+/ig)).to.equal(false);
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

    it('Should return false for non-number and nan', function () {
        expect(is.float(null)).to.equal(false);
        expect(is.float(NaN)).to.equal(false);
        expect(is.float(true)).to.equal(false);
        expect(is.float('')).to.equal(false);
        expect(is.float([])).to.equal(false);
        expect(is.float({})).to.equal(false);
        expect(is.float(new Date())).to.equal(false);
        expect(is.float(/\s+/ig)).to.equal(false);
    });
});

describe('is.fn()', function () {
    it('Should return true for function', function () {
        function noop() {}

        expect(is.fn(function () {})).to.equal(true);
        expect(is.fn(Math.abs)).to.equal(true);
        expect(is.fn(noop)).to.equal(true);
    });

    it('Should return false for non-function', function () {
        expect(is.fn(arguments)).to.equal(false);
        expect(is.fn(true)).to.equal(false);
        expect(is.fn(void 0)).to.equal(false);
        expect(is.fn(null)).to.equal(false);
        expect(is.fn(NaN)).to.equal(false);
        expect(is.fn(42)).to.equal(false);
        expect(is.fn('')).to.equal(false);
        expect(is.fn([])).to.equal(false);
        expect(is.fn({})).to.equal(false);
        expect(is.fn(new Date())).to.equal(false);
        expect(is.fn(/\s+/ig)).to.equal(false);
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

    it('Should return false for non-number and nan', function () {
        expect(is.int(null)).to.equal(false);
        expect(is.int(NaN)).to.equal(false);
        expect(is.int(true)).to.equal(false);
        expect(is.int('')).to.equal(false);
        expect(is.int([])).to.equal(false);
        expect(is.int({})).to.equal(false);
        expect(is.int(new Date())).to.equal(false);
        expect(is.int(/\s+/ig)).to.equal(false);
    });
});

describe('is.odd()', function () {
    it('Should return false for even numbers', function () {
        expect(is.odd(42)).to.equal(false);
        expect(is.odd(-42)).to.equal(false);
        expect(is.odd(0)).to.equal(false);
    });

    it('Should return true for odd numbers', function () {
        expect(is.odd(21)).to.equal(true);
        expect(is.odd(-21)).to.equal(true);
    });

    it('Should return false for non-numeric values', function () {
        expect(is.odd(void 0)).to.equal(false);
        expect(is.odd(null)).to.equal(false);
        expect(is.odd(NaN)).to.equal(false);
        expect(is.odd(true)).to.equal(false);
        expect(is.odd('')).to.equal(false);
        expect(is.odd([])).to.equal(false);
        expect(is.odd({})).to.equal(false);
        expect(is.odd(new Date())).to.equal(false);
        expect(is.odd(/\s+/ig)).to.equal(false);
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
        expect(is.type(new Array(1, 2, 3))).to.equal('array');

        expect(is.type(true)).to.equal('boolean');
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
