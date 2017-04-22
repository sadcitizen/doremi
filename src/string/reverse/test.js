import { expect } from 'chai';
import reverse from '.';

describe('string/reverse()', () => {
    it('Reverses a substring', () => {
        expect(reverse('Hello, World!')).to.equal('!dlroW ,olleH');
        expect(reverse('')).to.equal('');
        expect(reverse(12345)).to.equal('54321');
    });
});
