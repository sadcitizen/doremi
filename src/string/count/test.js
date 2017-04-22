import { expect } from 'chai';
import count from '.';

describe('string/count()', () => {
    it('Finds a substring', () => {
        expect(count('Hello, World!', 'l')).to.equal(3);
        expect(count('Hello, World!', 'll')).to.equal(1);
        expect(count(12345, 1)).to.equal(1);
        expect(count(99999, 9)).to.equal(5);
        expect(count(99999, 99)).to.equal(4);
    });

    it('Do not find a substring', () => {
        expect(count('Hello, World!', 'world')).to.equal(0);
        expect(count('Hello, World!', '! ')).to.equal(0);
    });

    it('Works with null, undefined and empty strings', () => {
        expect(count('', 'x')).to.equal(0);
        expect(count('', '')).to.equal(0);
        expect(count(null, 'x')).to.equal(0);
        expect(count(void 0, 'x')).to.equal(0);
    });
});
