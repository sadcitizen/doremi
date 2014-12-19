describe('_.is', function () {
    describe('_.is.exists()', function () {
        it('Should return false for undefined', function () {
            expect(_.is.exists()).to.equal(false);
            expect(_.is.exists(undefined)).to.equal(false);
        });

        it('Should return false for null', function () {
            expect(_.is.exists(null)).to.equal(false);
        });

        it('Should return true for other values', function () {
            expect(_.is.exists(0)).to.equal(true);
            expect(_.is.exists(42)).to.equal(true);
            expect(_.is.exists(-42)).to.equal(true);
            expect(_.is.exists(NaN)).to.equal(true);
            expect(_.is.exists(Infinity)).to.equal(true);
            expect(_.is.exists(-Infinity)).to.equal(true);
            expect(_.is.exists(true)).to.equal(true);
            expect(_.is.exists(false)).to.equal(true);
            expect(_.is.exists('')).to.equal(true);
            expect(_.is.exists('hello')).to.equal(true);
            expect(_.is.exists([])).to.equal(true);
            expect(_.is.exists([1, 2, 3])).to.equal(true);
            expect(_.is.exists({})).to.equal(true);
            expect(_.is.exists({a: 'b', c: 'd'})).to.equal(true);
        });
    });

    describe('_.is.equal()', function () {
        it('Two absent args should be equal', function () {
            expect(_.is.equal()).to.equal(true);
        });

        it('One absent arg and undefined should be equal', function () {
            expect(_.is.equal(undefined)).to.equal(true);
        });

        it('Undefined should be equal to undefined', function () {
            expect(_.is.equal(undefined, undefined)).to.equal(true);
        });

        it('Null should be equal to null', function () {
            expect(_.is.equal(null, null)).to.equal(true);
        });

        it('Undefined should not be equal to null', function () {
            expect(_.is.equal(undefined, null)).to.equal(false);
        });

        it('True should be equal to true', function () {
            expect(_.is.equal(true, true)).to.equal(true);
        });

        it('False should be equal to false', function () {
            expect(_.is.equal(false, false)).to.equal(true);
        });

        it('True should not be equal to false', function () {
            expect(_.is.equal(true, false)).to.equal(false);
        });

        it('NaN should be equal to NaN', function () {
            expect(_.is.equal(NaN, NaN)).to.equal(true);
        });

        it('Zero should be equal to zero', function () {
            expect(_.is.equal(0, 0)).to.equal(true);
        });

        it('Zero should not be equal to negative zero', function () {
            expect(_.is.equal(0, -0)).to.equal(false);
        });

        it('Infinity should be equal to infinity', function () {
            expect(_.is.equal(Infinity, Infinity)).to.equal(true);
        });

        it('Infinity should not be equal to negative infinity', function () {
            expect(_.is.equal(Infinity, -Infinity)).to.equal(false);
        });

        it('42 should be equal to 42', function () {
            expect(_.is.equal(42, 42)).to.equal(true);
        });

        it('42 should not be equal to -42', function () {
            expect(_.is.equal(42, -42)).to.equal(false);
        });

        it('Empty string should be equal to empty string', function () {
            expect(_.is.equal('', '')).to.equal(true);
        });

        it('String should be equal to yourself', function () {
            expect(_.is.equal('foo', 'foo')).to.equal(true);
        });

        it('String should not be equal to different string', function () {
            expect(_.is.equal('foo', 'bar')).to.equal(false);
        });
    });

    describe('_.is.typeOf()', function () {
        it('Should return a type of value', function () {
            expect(_.is.type(arguments)).to.equal('arguments');

            expect(_.is.type([])).to.equal('array');
            expect(_.is.type([1, 2, 3])).to.equal('array');
            expect(_.is.type(new Array(1, 2, 3))).to.equal('array');

            expect(_.is.type(true)).to.equal('boolean');
            expect(_.is.type(false)).to.equal('boolean');
            expect(_.is.type(new Boolean(false))).to.equal('boolean');
            expect(_.is.type(Boolean(true))).to.equal('boolean');

            expect(_.is.type(new Date())).to.equal('date');

            expect(_.is.type(function () {})).to.equal('function');
            expect(_.is.type(new Function('return true'))).to.equal('function');
            expect(_.is.type(Math.abs)).to.equal('function');

            expect(_.is.type(undefined)).to.equal('undefined');

            expect(_.is.type(NaN)).to.equal('nan');

            expect(_.is.type(42)).to.equal('number');
            expect(_.is.type(new Number(42))).to.equal('number');
            expect(_.is.type(Number(42))).to.equal('number');
            expect(_.is.type(0)).to.equal('number');
            expect(_.is.type(-0)).to.equal('number');

            expect(_.is.type(Infinity)).to.equal('infinity');

            expect(_.is.type(null)).to.equal('null');

            expect(_.is.type({})).to.equal('object');

            expect(_.is.type(/\s+/ig)).to.equal('regexp');
            expect(_.is.type(new RegExp('\\s+', 'ig'))).to.equal('regexp');

            expect(_.is.type('foo')).to.equal('string');
            expect(_.is.type(new String('foo'))).to.equal('string');
            expect(_.is.type(String('foo'))).to.equal('string');
            expect(_.is.type('')).to.equal('string');
        });
    });




});