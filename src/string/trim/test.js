import { expect } from 'chai';
import trim from '.';

describe('string/trim()', () => {
    it('Removes leading and trailing whitespaces', () => {
        expect(trim('           Hello, World!             ')).to.equal('Hello, World!');
        expect(trim('                        ')).to.equal('');
        expect(trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
        expect(trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Removes leading and trailing given characters', () => {
        expect(trim('/* Hello, World! */', '/', ' ', '*')).to.equal('Hello, World!');
        expect(trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });
});
