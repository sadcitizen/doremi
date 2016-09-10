'use strict';

import chai from 'chai';
import trimLeft from '../../src/string/trim-left';

const expect = chai.expect;

describe('string/trimLeft()', () => {
    it('Should remove leading whitespaces', () => {
        expect(trimLeft('           Hello, World! ')).to.equal('Hello, World! ');
        expect(trimLeft('                        ')).to.equal('');
        expect(trimLeft('\n Hello,   \t   World!')).to.equal('Hello,   \t   World!');
        expect(trimLeft('\0 \b \t \nHello, World!')).to.equal('Hello, World!');
    });

    it('Should remove leading given characters', () => {
        expect(trimLeft('/* Hello, World!*/', '/ ', '*')).to.equal('Hello, World!*/');
        expect(trimLeft('~~~****Hello, World!', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', () => {
        expect(trimLeft()).to.equal('');
        expect(trimLeft(void 0)).to.equal('');
        expect(trimLeft(null)).to.equal('');
    });
});