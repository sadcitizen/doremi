import { expect } from 'chai';
import camelize from '.';

describe('string/camelize()', () => {
    it('Converts string to camel case', () => {
        expect(camelize('lorem ipsum dolor')).to.equal('loremIpsumDolor');
        expect(camelize('    lorem   ipsum   dolor   ')).to.equal('loremIpsumDolor');
        expect(camelize('--lorem--ipsum--dolor--')).to.equal('loremIpsumDolor');
        expect(camelize('__lorem__ipsum__dolor__')).to.equal('loremIpsumDolor');
        expect(camelize(123456)).to.equal('123456');
    });

    it('Works with blank string', () => {
        expect(camelize('')).to.equal('');
        expect(camelize('       ')).to.equal('');
        expect(camelize('    \n   ')).to.equal('');
    });
});
