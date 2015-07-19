'use strict';

import chai from 'chai';
import reverse from '../../src/string/reverse';

const expect = chai.expect;

describe('string/reverse()', () => {
    it('Should reverse a substring', () => {
        expect(reverse('Hello, World!')).to.equal('!dlroW ,olleH');
        expect(reverse('')).to.equal('');
        expect(reverse(12345)).to.equal('54321');
    });

    it('Should treat null and undefined as empty string', () => {
        expect(reverse()).to.equal('');
        expect(reverse(void 0)).to.equal('');
        expect(reverse(null)).to.equal('');
    });
});