'use strict';

import chai from 'chai';
import trimRight from '../../src/string/trim-right';

const expect = chai.expect;

describe('string/trimRight()', () => {
    it('Should remove trailing whitespaces', () => {
        expect(trimRight(' Hello, World!             ')).to.equal(' Hello, World!');
        expect(trimRight('        ')).to.equal('');
        expect(trimRight('\tHello,   \t   World!        \r     ')).to.equal('\tHello,   \t   World!');
        expect(trimRight('Hello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Should remove trailing given characters', () => {
        expect(trimRight('/Hello, World! */', '/ ', '*')).to.equal('/Hello, World!');
        expect(trimRight('Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', () => {
        expect(trimRight()).to.equal('');
        expect(trimRight(void 0)).to.equal('');
        expect(trimRight(null)).to.equal('');
    });
});