'use strict';

import chai from 'chai';
import camelize from '../../src/string/camelize';

const expect = chai.expect;

describe('string/camelize()', () => {
    it('Should convert string to camel case', () => {
        expect(camelize('lorem ipsum dolor')).to.equal('loremIpsumDolor');
        expect(camelize('    lorem   ipsum   dolor   ')).to.equal('loremIpsumDolor');
        expect(camelize('--lorem--ipsum--dolor--')).to.equal('loremIpsumDolor');
        expect(camelize('__lorem__ipsum__dolor__')).to.equal('loremIpsumDolor');
        expect(camelize(123456)).to.equal('123456');
    });

    it('Should work with blank string', () => {
        expect(camelize('')).to.equal('');
        expect(camelize('       ')).to.equal('');
        expect(camelize('    \n   ')).to.equal('');
    });

    it('Should treat null and undefined as blank string', () => {
        expect(camelize()).to.equal('');
        expect(camelize(void 0)).to.equal('');
        expect(camelize(null)).to.equal('');
    });
});