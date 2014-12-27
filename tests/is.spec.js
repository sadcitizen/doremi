var is = require('../src/is');
var expect = require('chai').expect;

describe('is.args()', function () {
    var fn;

    before(function () {
        fn = function () {
            return arguments;
        };
    });

    it('Should return true for if value is an arguments', function () {
        expect(is.args(arguments)).to.equal(true);
        expect(is.args(fn())).to.equal(true);
    });

    it('Should return false for if value is not an arguments', function () {
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

describe('is.array()', function () {
    it('Should return true if value is an array', function () {
        expect(is.array([])).to.equal(true);
        expect(is.array([1, 2, 3])).to.equal(true);
        expect(is.array(new Array(1, 2, 3))).to.equal(true);
    });

    it('Should return false if value is not an array', function () {
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

describe('is.bool()', function () {
    it('Should return true if value is a boolean', function () {
        expect(is.bool(true)).to.equal(true);
        expect(is.bool(Boolean(42))).to.equal(true);
        /* jshint -W053 */
        expect(is.bool(new Boolean(42))).to.equal(true);
        /* jshint +W053 */
    });

    it('Should return false if value is not a boolean', function () {
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

describe('is.date()', function () {
    it('Should return true if value is a date', function () {
        expect(is.date(new Date())).to.equal(true);
        expect(is.date(new Date('Date'))).to.equal(true);
        expect(is.date(new Date(2014, 11, 1))).to.equal(true);
    });

    it('Should return false if value is not a date', function () {
        expect(is.date(arguments)).to.equal(false);
        expect(is.date(void 0)).to.equal(false);
        expect(is.date(true)).to.equal(false);
        expect(is.date(null)).to.equal(false);
        expect(is.date(NaN)).to.equal(false);
        expect(is.date(42)).to.equal(false);
        expect(is.date('')).to.equal(false);
        expect(is.date([])).to.equal(false);
        expect(is.date({})).to.equal(false);
        expect(is.date(/\s+/ig)).to.equal(false);
    });
});

describe('is.defined()', function () {
    it('Should return false if value is undefined', function () {
        expect(is.defined()).to.equal(false);
        expect(is.defined(void 0)).to.equal(false);
        expect(is.defined(undefined)).to.equal(false);
    });

    it('Should return true if value is defined', function () {
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

    it('Should return true if value is an empty string', function () {
        expect(is.empty('')).to.equal(true);
    });

    it('Should return false if value is not an empty string', function () {
        expect(is.empty('hello')).to.equal(false);
    });

    it('Should return true if value is an empty object', function () {
        expect(is.empty({})).to.equal(true);
    });

    it('Should return false if value is not an empty object', function () {
        expect(is.empty({a: 'b', c: 'd'})).to.equal(false);
    });

    it('Should return true if value is an empty array', function () {
        expect(is.empty([])).to.equal(true);
    });

    it('Should return false if value is not an empty array', function () {
        expect(is.empty([1, 2, 3, 4])).to.equal(false);
    });

    it('Should return true if value is an empty arguments', function () {
        expect(is.empty(fn())).to.equal(true);
    });

    it('Should return false if value is not an empty arguments', function () {
        expect(is.empty(fn(1, 2, 3, 4))).to.equal(false);
    });

    it('Should return true if value is not an enumerable', function () {
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
        expect(is.equal(Infinity, Infinity)).to.equal(true);
        expect(is.equal(42, 42)).to.equal(true);
        expect(is.equal('', '')).to.equal(true);
    });

    it('Primitive value should be equal to their corresponding wrapper', function() {
        /* jshint -W053*/
        expect(is.equal(42, new Number(42))).to.equal(true);
        expect(is.equal(42, Number(42))).to.equal(true);
        expect(is.equal('42', new String('42'))).to.equal(true);
        expect(is.equal('42', String('42'))).to.equal(true);
        expect(is.equal(true, new Boolean(true))).to.equal(true);
        expect(is.equal(true, Boolean(true))).to.equal(true);
        /* jshint +W053*/
    });

    it('Zero should not be equal to negative zero', function () {
        expect(is.equal(0, -0)).to.equal(false);
    });

    it('Date should be equal to itself', function () {
        var now = new Date();
        expect(is.equal(now, now)).to.equal(true);
    });

    it('Date objects referencing identical times should be equal', function () {
        expect(is.equal(new Date(2014, 1, 1), new Date(2014, 1, 1))).to.equal(true);
    });

    it('Invalid dates should not be equal', function () {
        expect(is.equal(new Date('Today'), new Date('Today'))).to.equal(false);
    });

    it('Regular expression should be equal to itself', function () {
        var re = new RegExp('s', 'igm');
        expect(is.equal(re, re)).to.equal(true);
        expect(is.equal(/\s+/ig, /\s+/ig)).to.equal(true);
    });

    it('Regular expression with equivalent patterns and different flags should not be equal', function () {
        expect(is.equal(/\s+/i, /\s+/ig)).to.equal(false);
        expect(is.equal(/\s+/im, /\s+/gm)).to.equal(false);
    });

    it('Regular expression with different patterns and equivalent flags should not be equal', function () {
        expect(is.equal(/\w+/ig, /\s+/ig)).to.equal(false);
        expect(is.equal(/\d+/im, /\s+/gm)).to.equal(false);
    });

    it('Array should be equal to itself', function () {
        var arr = [1, 2, 3, 4];
        expect(is.equal(arr, arr)).to.equal(true);

        /* jshint -W053 */
        var arrCtor = new Array(1, 2, 3, 4);
        /* jshint +W053 */
        expect(is.equal(arrCtor, arrCtor)).to.equal(true);
    });

    it('Arrays containing identical items should be equal', function () {
        /* jshint -W053 */
        expect(is.equal([42, true, 'hello', /\s+/ig], new Array(42, true, 'hello', /\s+/ig))).to.equal(true);
        expect(is.equal(new Array(42, true, 'hello', /\s+/ig), new Array(42, true, 'hello', /\s+/ig))).to.equal(true);
        expect(is.equal([42, true, 'hello', /\s+/ig], [42, true, 'hello', /\s+/ig])).to.equal(true);
        /* jshint +W053 */
    });

    it('Arrays containing equivalent items should be equal', function () {
        /* jshint -W053 */
        expect(is.equal([new Number(42), new Boolean(true), new String('hello'), []], new Array(42, true, 'hello', []))).to.equal(true);
        expect(is.equal(new Array(new Number(42), new Boolean(true), new String('hello'), []), new Array(42, true, 'hello', []))).to.equal(true);
        expect(is.equal([new Number(42), new Boolean(true), new String('hello'), []], [42, true, 'hello', []])).to.equal(true);
        /* jshint +W053 */
    });
});

describe('is.even()', function () {
    it('Should return true if value is an even number', function () {
        expect(is.even(42)).to.equal(true);
        expect(is.even(-42)).to.equal(true);
        expect(is.even(0)).to.equal(true);
    });

    it('Should return false if value is an odd number', function () {
        expect(is.even(21)).to.equal(false);
        expect(is.even(-21)).to.equal(false);
    });

    it('Should return false if value is not numeric', function () {
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
    it('Should return false if value is undefined', function () {
        expect(is.exists()).to.equal(false);
        expect(is.exists(undefined)).to.equal(false);
    });

    it('Should return false if value is null', function () {
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
    it('Should return true if value is float number', function () {
        expect(is.float(42.42)).to.equal(true);
    });

    it('Should return false for other numbers', function () {
        expect(is.float(42)).to.equal(false);
        expect(is.float(0)).to.equal(false);
    });

    it('Should return false if value is not numeric or is nan', function () {
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
    it('Should return true if value is a function', function () {
        function noop() {}

        expect(is.fn(function () {})).to.equal(true);
        expect(is.fn(Math.abs)).to.equal(true);
        expect(is.fn(noop)).to.equal(true);
    });

    it('Should return false if value is not a function', function () {
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

describe('is.guid()', function () {
    it('Should return true for a guid string', function () {
        expect(is.guid('550e8400-e29b-41d4-a716-446655440000')).to.equal(true);
        expect(is.guid('f47ac10b-58cc-4372-a567-0e02b2c3d479')).to.equal(true);
    });

    it('Should return false for other strings', function () {
        expect(is.guid('')).to.equal(false);
        expect(is.guid('  ')).to.equal(false);
        expect(is.guid('hello')).to.equal(false);
        expect(is.guid('apple, orange')).to.equal(false);
    });
});

describe('is.nan()', function () {
    it('Should return true if value is NaN', function () {
        expect(is.nan(NaN)).to.equal(true);
        expect(is.nan(parseInt('hello'))).to.equal(true);
        expect(is.nan(1 / 'hello')).to.equal(true);
    });

    it('Should return false if value is not NaN', function () {
        expect(is.nan(arguments)).to.equal(false);
        expect(is.nan(void 0)).to.equal(false);
        expect(is.nan(true)).to.equal(false);
        expect(is.nan(null)).to.equal(false);
        expect(is.nan(new Date())).to.equal(false);
        expect(is.nan(42)).to.equal(false);
        expect(is.nan('')).to.equal(false);
        expect(is.nan([])).to.equal(false);
        expect(is.nan({})).to.equal(false);
        expect(is.nan(/\s+/ig)).to.equal(false);
    });
});

describe('is.hex()', function () {
    it('Should return true for a hex string', function () {
        expect(is.hex('ff')).to.equal(true);
        expect(is.hex('00ffcc')).to.equal(true);
        expect(is.hex('0123456789AaBbCcDdEeFf')).to.equal(true);
    });

    it('Should return false for other strings', function () {
        expect(is.hex('')).to.equal(false);
        expect(is.hex('  ')).to.equal(false);
        expect(is.hex('hello')).to.equal(false);
        expect(is.hex('apple, orange')).to.equal(false);
    });
});

describe('is.int()', function () {
    it('Should return true if value is an integer', function () {
        expect(is.int(42)).to.equal(true);
    });

    it('Should return true if value is zero', function () {
        expect(is.int(0)).to.equal(true);
    });

    it('Should return false if value is float number', function () {
        expect(is.int(42.42)).to.equal(false);
    });

    it('Should return false if value is not numeric or is nan', function () {
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

describe('is.json()', function () {
    it('Should return true for a json string', function () {
        expect(is.json(JSON.stringify({}))).to.equal(true);
        expect(is.json(JSON.stringify({ a: 'b', c: 'd' }))).to.equal(true);
        expect(is.json(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).to.equal(true);
    });

    it('Should return false for other strings', function () {
        expect(is.json('')).to.equal(false);
        expect(is.json('  ')).to.equal(false);
        expect(is.json('hello')).to.equal(false);
        expect(is.json('apple, orange')).to.equal(false);
    });
});

describe('is.number()', function () {
    it('Should return false if value is an number', function () {
        expect(is.number(42)).to.equal(true);
        expect(is.number(Number('42'))).to.equal(true);
        /* jshint -W053 */
        expect(is.number(new Number('42'))).to.equal(true);
        /* jshint +W053 */
        expect(is.number(-42)).to.equal(true);
        expect(is.number(0)).to.equal(true);
    });

    it('Should return false if value is not numeric', function () {
        expect(is.number(void 0)).to.equal(false);
        expect(is.number(null)).to.equal(false);
        expect(is.number(NaN)).to.equal(false);
        expect(is.number(true)).to.equal(false);
        expect(is.number('')).to.equal(false);
        expect(is.number([])).to.equal(false);
        expect(is.number({})).to.equal(false);
        expect(is.number(new Date())).to.equal(false);
        expect(is.number(/\s+/ig)).to.equal(false);
    });
});

describe('is.number()', function () {
    it('Should return false if value is an object', function () {
        expect(is.object({})).to.equal(true);
        expect(is.object({ a: 'b', c: 'd' })).to.equal(true);
        /* jshint -W057 */
        expect(is.object(new function () {} ())).to.equal(true);
        /* jshint +W057 */
        /* jshint -W053, -W010 */
        expect(is.object(new Object())).to.equal(true);
        /* jshint +W053, +W010 */
    });

    it('Should return false if value is not an object', function () {
        expect(is.object(void 0)).to.equal(false);
        expect(is.object(null)).to.equal(false);
        expect(is.object(NaN)).to.equal(false);
        expect(is.object(true)).to.equal(false);
        expect(is.object(0)).to.equal(false);
        expect(is.object('')).to.equal(false);
        expect(is.object([])).to.equal(false);
        expect(is.object(new Date())).to.equal(false);
        expect(is.object(/\s+/ig)).to.equal(false);
    });
});

describe('is.odd()', function () {
    it('Should return false if value is an even number', function () {
        expect(is.odd(42)).to.equal(false);
        expect(is.odd(-42)).to.equal(false);
        expect(is.odd(0)).to.equal(false);
    });

    it('Should return true if value is odd number', function () {
        expect(is.odd(21)).to.equal(true);
        expect(is.odd(-21)).to.equal(true);
    });

    it('Should return false if value is not numeric', function () {
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

describe('is.regexp()', function () {
    it('Should return false if value is a string', function () {
        expect(is.regexp(/\s+/ig)).to.equal(true);
        expect(is.regexp(new RegExp('\\s', 'ig'))).to.equal(true);
    });

    it('Should return false if value is not numeric', function () {
        expect(is.regexp(void 0)).to.equal(false);
        expect(is.regexp(null)).to.equal(false);
        expect(is.regexp(NaN)).to.equal(false);
        expect(is.regexp(true)).to.equal(false);
        expect(is.regexp('')).to.equal(false);
        expect(is.regexp(42)).to.equal(false);
        expect(is.regexp([])).to.equal(false);
        expect(is.regexp({})).to.equal(false);
        expect(is.regexp(new Date())).to.equal(false);
    });
});

describe('is.string()', function () {
    it('Should return false if value is a string', function () {
        expect(is.string('')).to.equal(true);
        expect(is.string(String(42))).to.equal(true);
        /* jshint -W053 */
        expect(is.string(new String(42))).to.equal(true);
        /* jshint +W053 */
    });

    it('Should return false if value is not numeric', function () {
        expect(is.string(void 0)).to.equal(false);
        expect(is.string(null)).to.equal(false);
        expect(is.string(NaN)).to.equal(false);
        expect(is.string(true)).to.equal(false);
        expect(is.string(42)).to.equal(false);
        expect(is.string([])).to.equal(false);
        expect(is.string({})).to.equal(false);
        expect(is.string(new Date())).to.equal(false);
        expect(is.string(/\s+/ig)).to.equal(false);
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
