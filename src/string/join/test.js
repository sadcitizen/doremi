import { expect } from 'chai';
import join from '.';

describe('string/join()', () => {
    it('Joins strings', () => {
        expect(join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).to.equal('lorem ipsum dolor sit amet');
        expect(join('', 'h', 'e', 'l', 'lo')).to.equal('hello');
        expect(join('+', 1, 2, 3)).to.equal('1+2+3');
    });

    it('Ignores null, undefined and empty strings', () => {
        expect(join()).to.equal('');
        expect(join('', '', '')).to.equal('');
        expect(join(' ', null, null)).to.equal('');
        expect(join(' ', void 0, void 0)).to.equal('');
        expect(join(' ', 'lorem', void 0, void 0)).to.equal('lorem');
    });
});
