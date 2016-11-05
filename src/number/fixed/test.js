import { expect } from 'chai';
import fixed from '.';

describe.only('number/fixed()', () => {
    it('Returns formatted number', () => {
        expect(fixed(1.23456789, 0)).to.equal('1');
        expect(fixed(1.23456789, 1)).to.equal('1.2');
        expect(fixed(1.23456789, 2)).to.equal('1.23');
        expect(fixed(1.23456789, 3)).to.equal('1.234');
        expect(fixed(1.23456789, 4)).to.equal('1.2345');
        expect(fixed(1.23456789, 5)).to.equal('1.23456');
        expect(fixed(1.23456789, 6)).to.equal('1.234567');
        expect(fixed(1.23456789, 7)).to.equal('1.2345678');
        expect(fixed(1.23456789, 8)).to.equal('1.23456789');
        expect(fixed(1.23456789, 9)).to.equal('1.234567890');
    });

    it('Treats negative precision as zero', () => {
        expect(fixed(1234.56789, -3)).to.equal('1234');
        expect(fixed(12.3456789, -4)).to.equal('12');
    });
});
