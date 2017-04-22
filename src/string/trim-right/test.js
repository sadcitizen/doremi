import { expect } from 'chai';
import trimRight from '.';

describe('string/trimRight()', () => {
    it('Removes trailing whitespaces', () => {
        expect(trimRight(' Hello, World!             ')).to.equal(' Hello, World!');
        expect(trimRight('        ')).to.equal('');
        expect(trimRight('\tHello,   \t   World!        \r     ')).to.equal('\tHello,   \t   World!');
        expect(trimRight('Hello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Removes trailing given characters', () => {
        expect(trimRight('/Hello, World! */', '/', ' ', '*')).to.equal('/Hello, World!');
        expect(trimRight('Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });
});
