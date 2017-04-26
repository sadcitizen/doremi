import { expect } from 'chai';
import chop from '.';

describe('string/chop()', () => {
    it('Returns a string chopped into pieces', () => {
        expect(chop('lorem ipsum', 5)).to.deep.equal(['lorem', ' ipsu', 'm']);
        expect(chop('lorem ipsum', 4)).to.deep.equal(['lore', 'm ip', 'sum']);
        expect(chop('lorem ipsum', 3)).to.deep.equal(['lor', 'em ', 'ips', 'um']);
        expect(chop('lorem ipsum', 2)).to.deep.equal(['lo', 're', 'm ', 'ip', 'su', 'm']);
        expect(chop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('haha', 2)).to.deep.equal(['ha', 'ha']);
    });

    it('Works with null and undefined', () => {
        expect(chop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        expect(chop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Treats negative step as zero', () => {
        expect(chop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });
});
