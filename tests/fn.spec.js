var fn = require('../src/fn');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('fn', function () {
    describe('fn.compose()', function () {
        var fn1 = sinon.spy();
        var fn2 = sinon.spy();
        var fn3 = sinon.spy();
        var composed = fn.compose(fn1, fn2, fn3);

        it('Should return new function', function () {
            expect(composed).to.be.a('function');
        });

        it('Should call all provided functions', function () {
            composed();
            expect(fn1.called).to.equal(true);
            expect(fn2.called).to.equal(true);
            expect(fn3.called).to.equal(true);
        });

        it('Should return result of invoking the provided functions', function () {
            function f1 (n) {
                return n + 1;
            }

            function f2 (n) {
                return n * 2;
            }

            function f3 (n) {
                return n - 3;
            }

            expect(fn.compose(f1)(1)).to.equal(2);
            expect(fn.compose(f2, f1)(1)).to.equal(4);
            expect(fn.compose(f3, f2, f1)(1)).to.equal(1);
        });
    });

    describe('fn.pipeline()', function () {
        var fn1 = sinon.spy();
        var fn2 = sinon.spy();
        var fn3 = sinon.spy();
        var pipelined = fn.pipeline(fn1, fn2, fn3);

        it('Should return new function', function () {
            expect(pipelined).to.be.a('function');
        });

        it('Should call all provided functions', function () {
            pipelined();
            expect(fn1.called).to.equal(true);
            expect(fn2.called).to.equal(true);
            expect(fn3.called).to.equal(true);
        });

        it('Should return result of invoking the provided functions', function () {
            function f1 (n) {
                return n + 1;
            }

            function f2 (n) {
                return n * 2;
            }

            function f3 (n) {
                return n - 3;
            }

            expect(fn.pipeline(f1)(1)).to.equal(2);
            expect(fn.pipeline(f1, f2)(1)).to.equal(4);
            expect(fn.pipeline(f1, f2, f3)(1)).to.equal(1);
        });
    });
});