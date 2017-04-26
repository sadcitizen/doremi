import { expect } from 'chai';
import chopRight from '.';

describe('string/chopRight()', () => {
    it('Returns a string chopped into pieces', () => {
        expect(chopRight('lorem ipsum', 5)).to.deep.equal(['l', 'orem ', 'ipsum']);
        expect(chopRight('lorem ipsum', 4)).to.deep.equal(['lor', 'em i', 'psum']);
        expect(chopRight('lorem ipsum', 3)).to.deep.equal(['lo', 'rem', ' ip', 'sum']);
        expect(chopRight('lorem ipsum', 2)).to.deep.equal(['l', 'or', 'em', ' i', 'ps', 'um']);
        expect(chopRight('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('haha', 2)).to.deep.equal(['ha', 'ha']);
    });

    it('Works with null and undefined', () => {
        expect(chopRight(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        expect(chopRight('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Treats negative step as zero', () => {
        expect(chopRight('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });
});
