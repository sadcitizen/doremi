'use strict';

import chai from 'chai';
import clean from '../../src/string/clean';

const expect = chai.expect;

describe('string/clean()', () => {
    it('Should remove all spaces', () => {
        expect(clean('           Hello,      World!             ')).to.equal('Hello, World!');
        expect(clean('                        ')).to.equal('');
    });

    it('Should remove all whitespace', () => {
        expect(clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
        expect(clean('\0 \b \t \n \v \f \r')).to.equal('');
    });
});