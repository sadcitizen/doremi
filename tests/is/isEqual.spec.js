'use strict';

import chai from 'chai';
import isEqual from '../../src/is/isEqual';

const expect = chai.expect;

describe('is/isEqual()', () => {
    it('Primitive value should be equal to itself', () => {
        expect(isEqual()).to.equal(true);
        expect(isEqual(undefined, undefined)).to.equal(true);
        expect(isEqual(null, null)).to.equal(true);
        expect(isEqual(true, true)).to.equal(true);
        expect(isEqual(NaN, NaN)).to.equal(true);
        expect(isEqual(Infinity, Infinity)).to.equal(true);
        expect(isEqual(42, 42)).to.equal(true);
        expect(isEqual('', '')).to.equal(true);
    });

    it('Primitive value should be equal to their corresponding wrapper', () => {
        /* jshint -W053*/
        expect(isEqual(42, new Number(42))).to.equal(true);
        expect(isEqual(42, Number(42))).to.equal(true);
        expect(isEqual('42', new String('42'))).to.equal(true);
        expect(isEqual('42', String('42'))).to.equal(true);
        expect(isEqual(true, new Boolean(true))).to.equal(true);
        expect(isEqual(true, Boolean(true))).to.equal(true);
        /* jshint +W053*/
    });

    it('Zero should not be equal to negative zero', () => {
        expect(isEqual(0, -0)).to.equal(false);
    });

    it('Date should be equal to itself', () => {
        const now = new Date();
        expect(isEqual(now, now)).to.equal(true);
    });

    it('Date objects referencing identical times should be equal', () => {
        expect(isEqual(new Date(2014, 1, 1), new Date(2014, 1, 1))).to.equal(true);
    });

    it('Invalid dates should not be equal', () => {
        expect(isEqual(new Date('Today'), new Date('Today'))).to.equal(false);
    });

    it('Regular expression should be equal to itself', () => {
        const re = new RegExp('s', 'igm');
        expect(isEqual(re, re)).to.equal(true);
        expect(isEqual(/\s+/ig, /\s+/ig)).to.equal(true);
    });

    it('Regular expression with equivalent patterns and different flags should not be equal', () => {
        expect(isEqual(/\s+/i, /\s+/ig)).to.equal(false);
        expect(isEqual(/\s+/im, /\s+/gm)).to.equal(false);
    });

    it('Regular expression with different patterns and equivalent flags should not be equal', () => {
        expect(isEqual(/\w+/ig, /\s+/ig)).to.equal(false);
        expect(isEqual(/\d+/im, /\s+/gm)).to.equal(false);
    });

    it('Array should be equal to itself', () => {
        const arr = [1, 2, 3, 4];
        expect(isEqual(arr, arr)).to.equal(true);

        /* jshint -W053 */
        const arrCtor = new Array(1, 2, 3, 4);
        /* jshint +W053 */
        expect(isEqual(arrCtor, arrCtor)).to.equal(true);
    });

    it('Arrays containing identical items should be equal', () => {
        /* jshint -W053 */
        expect(isEqual([42, true, 'hello', /\s+/ig], new Array(42, true, 'hello', /\s+/ig))).to.equal(true);
        expect(isEqual(new Array(42, true, 'hello', /\s+/ig), new Array(42, true, 'hello', /\s+/ig))).to.equal(true);
        expect(isEqual([42, true, 'hello', /\s+/ig], [42, true, 'hello', /\s+/ig])).to.equal(true);
        /* jshint +W053 */
    });

    it('Arrays containing equivalent items should be equal', () => {
        /* jshint -W053 */
        expect(isEqual([new Number(42), new Boolean(true), new String('hello'), []], new Array(42, true, 'hello', []))).to.equal(true);
        expect(isEqual(new Array(new Number(42), new Boolean(true), new String('hello'), []), new Array(42, true, 'hello', []))).to.equal(true);
        expect(isEqual([new Number(42), new Boolean(true), new String('hello'), []], [42, true, 'hello', []])).to.equal(true);
        /* jshint +W053 */
    });

    it('Arguments containing equivalent items should be equal', () => {
        function fn() {
            return arguments;
        }

        expect(isEqual(fn(42, true, 'hello', /\s+/ig), fn(42, true, 'hello', /\s+/ig))).to.equal(true);
    });

    it('An object should be equal to itself', () => {
        var obj = {};
        expect(isEqual(obj, obj)).to.equal(true);
    });

    it('Empty objects should be equal', () => {
        expect(isEqual({}, {})).to.equal(true);
    });

    it('Objects with equivalent structure should be equal', () => {
        expect(isEqual({ a: 'b', c: 'd' }, { a: 'b', c: 'd' })).to.equal(true);

        const fn = function () {
            return this.b;
        };
        const target = { a: 'b', c: { d: [1, 2, 4], f: fn }};
        const other = { a: 'b', c: { d: [1, 2, 4], f: fn }};
        expect(isEqual(target, other)).to.equal(true);
    });

    it('Objects created by constructor with equivalent parameters should be equal', () => {
        function Person(name) {
            this.name = name;
        }

        Person.prototype.introduce = function () {
            return 'Hi, I am ' + this.name;
        };

        expect(isEqual(new Person('John'), new Person('John'))).to.equal(true);
    });
});