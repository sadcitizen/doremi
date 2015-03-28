var rnd = require('../build/random.min');
var is = require('../build/is.min');
var expect = require('chai').expect;

describe('Random', function () {
    describe('.bool()', function () {
        it('Should return boolean', function () {
            expect(is.type(rnd.bool())).to.equal('boolean');
        });
    });

    describe('.choice()', function () {
        var list = [1, 2, 3],
            random = Math.random(),
            firstChoice,
            secondChoice,
            firstApplyChoice,
            secondApplyChoice;

        before(function () {
            firstChoice = rnd.choice(list);
            secondChoice = rnd.choice(list);

            firstApplyChoice = rnd.choice.apply(random, list);
            secondApplyChoice = rnd.choice.apply(random, list);
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

    describe('.float()', function () {
        var float, range, fix;

        before(function () {
            float = rnd.float();
            range = rnd.float(0.113, 94.378);
            fix = rnd.float(0, 10, 3);
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
            expect(('' + rnd.float(0, 10, 3)).split('.')[1].length).to.be.at.most(3);
            expect(('' + rnd.float(0, 100, 3)).split('.')[1].length).to.be.at.most(3);
        });
    });

    describe('.guid()', function () {
        var guid;

        before(function () {
            guid = rnd.guid();
        });

        it('Guid should be guid', function () {
            expect(guid).to.match(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
        });
    });

    describe('.hex()', function () {
        var hex, hex12;

        before(function () {
            hex = rnd.hex();
            hex12 = rnd.hex(12);
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

    describe('.int()', function () {
        var int, range;

        before(function () {
            int = rnd.int();
            range = rnd.int(0, 1000);
        });

        it('Should return a integer', function () {
            expect(is.int(int)).to.equal(true);
        });

        it('Should return an integer inside range', function () {
            expect(range > 0 && range < 1000).to.equal(true);
        });
    });
});