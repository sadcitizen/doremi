var rn = require('../src/rn');
var is = require('../src/is');
var expect = require('chai').expect;

describe('rn', function () {
    describe('rn.bool()', function () {
        it('Should return boolean', function () {
            expect(is.type(rn.bool())).to.equal('boolean');
        });
    });

    describe('rn.choice()', function () {
        var list = [1, 2, 3],
            random = Math.random(),
            firstChoice,
            secondChoice,
            firstApplyChoice,
            secondApplyChoice;

        before(function () {
            firstChoice = rn.choice(list);
            secondChoice = rn.choice(list);

            firstApplyChoice = rn.choice.apply(random, list);
            secondApplyChoice = rn.choice.apply(random, list);
        });

        it('Should pick a random item from list', function () {
            expect(list).to.contain(firstChoice);
            expect(list).to.contain(secondChoice);
        });

        it('Should pick a random item from arguments', function () {
            expect(list).to.contain(firstApplyChoice);
            expect(list).to.contain(secondApplyChoice);
        });
    });

    describe('rn.float()', function () {
        var float, range, fix;

        before(function () {
            float = rn.float();
            range = rn.float(0.113, 94.378);
            fix = rn.float(0, 10, 3);
        });

        it('Should return a float', function () {
            expect(is.float(float)).to.equal(true);
            expect(is.float(range)).to.equal(true);
            expect(is.float(fix)).to.equal(true);
        });

        it('Should return an float inside range', function () {
            expect(range > 0.113 && range < 94.378).to.equal(true);
            expect(fix > 0 && fix < 10).to.equal(true);
        });

        it('Should return an float with less than 3 digits after point', function () {
            expect(('' + fix).split('.')[1].length).to.be.at.most(3);
            expect(('' + rn.float(0, 10, 3)).split('.')[1].length).to.be.at.most(3);
            expect(('' + rn.float(0, 100, 3)).split('.')[1].length).to.be.at.most(3);
        });
    });

    describe('rn.guid()', function () {
        var guid;

        before(function () {
            guid = rn.guid();
        });

        it('Guid should be guid', function () {
            expect(guid).to.match(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
        });
    });

    describe('rn.hex()', function () {
        var hex, hex12;

        before(function () {
            hex = rn.hex();
            hex12 = rn.hex(12);
        });

        it('Should return a string', function () {
            expect(is.type(hex)).to.equal('string');
            expect(is.type(hex12)).to.equal('string');

            expect(hex.length).to.equal(1);
            expect(hex12.length).to.equal(12);
        });

        it('Hex should be a hex', function () {
            expect(hex).to.match(/[a-f0-9]+/);
            expect(hex12).to.match(/[a-f0-9]+/);
        });
    });

    describe('rn.int()', function () {
        var int, range;

        before(function () {
            int = rn.int();
            range = rn.int(0, 1000);
        });

        it('Should return a integer', function () {
            expect(is.int(int)).to.equal(true);
        });

        it('Should return an integer inside range', function () {
            expect(range > 0 && range < 1000).to.equal(true);
        });
    });
});