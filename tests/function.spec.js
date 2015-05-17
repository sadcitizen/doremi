var fn = require('../build/function.min');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Function', function () {
    describe('.compose()', function () {
        var f1 = sinon.spy(),
            f2 = sinon.spy(),
            f3 = sinon.spy(),
            composed = fn.compose(f1, f2, f3);

        it('Should return new function', function () {
            expect(composed).to.be.a('function');
        });

        it('Should call all provided functions', function () {
            composed();
            expect(f1.called).to.equal(true);
            expect(f2.called).to.equal(true);
            expect(f3.called).to.equal(true);
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

    describe('.partial()', function () {
        it('Should return new function', function () {
            var fnc = sinon.spy(),
                partialFn = fn.partial(fnc);

            expect(partialFn).to.be.a('function');
        });

        it('Should partially apply arguments to a function', function () {
            var func = function (a, b, c, d, e) {
                return [ a, b, c, d, e ];
            };

            var partialFunc = fn.partial(func, 1, 'string', true);
            var result = partialFunc(3, false);

            expect(result.length).to.equal(5);
            expect(result[0]).to.equal(1);
            expect(result[1]).to.equal('string');
            expect(result[2]).to.equal(true);
            expect(result[3]).to.equal(3);
            expect(result[4]).to.equal(false);
        });
    });

    describe('.pipeline()', function () {
        var f1 = sinon.spy(),
            f2 = sinon.spy(),
            f3 = sinon.spy(),
            pipelined = fn.pipeline(f1, f2, f3);

        it('Should return new function', function () {
            expect(pipelined).to.be.a('function');
        });

        it('Should call all provided functions', function () {
            pipelined();
            expect(f1.called).to.equal(true);
            expect(f2.called).to.equal(true);
            expect(f3.called).to.equal(true);
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