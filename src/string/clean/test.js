import { expect } from 'chai';
import clean from '.';

describe('string/clean()', () => {
    it('Removes all spaces', () => {
        expect(clean('           Hello,      World!             ')).to.equal('Hello, World!');
        expect(clean('                        ')).to.equal('');
    });

    it('Removes all whitespace', () => {
        expect(clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
        expect(clean('\0 \b \t \n \v \f \r')).to.equal('');
    });
});
