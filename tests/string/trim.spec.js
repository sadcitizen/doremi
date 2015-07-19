'use strict';

import chai from 'chai';
import trim from '../../src/string/trim';

const expect = chai.expect;

describe('string/trim()', () => {
    it('Should remove leading and trailing whitespaces', () => {
        expect(trim('           Hello, World!             ')).to.equal('Hello, World!');
        expect(trim('                        ')).to.equal('');
        expect(trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
        expect(trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Should remove leading and trailing given characters', () => {
        expect(trim('/* Hello, World! */', '/ ', '*')).to.equal('Hello, World!');
        expect(trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', () => {
        expect(trim()).to.equal('');
        expect(trim(void 0)).to.equal('');
        expect(trim(null)).to.equal('');
    });
});