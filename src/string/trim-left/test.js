import { expect } from 'chai';
import trimLeft from '.';

describe('string/trimLeft()', () => {
    it('Removes leading whitespaces', () => {
        expect(trimLeft('           Hello, World! ')).to.equal('Hello, World! ');
        expect(trimLeft('                        ')).to.equal('');
        expect(trimLeft('\n Hello,   \t   World!')).to.equal('Hello,   \t   World!');
        expect(trimLeft('\0 \b \t \nHello, World!')).to.equal('Hello, World!');
    });

    it('Removes leading given characters', () => {
        expect(trimLeft('/* Hello, World!*/', '/', ' ', '*')).to.equal('Hello, World!*/');
        expect(trimLeft('~~~****Hello, World!', '*~')).to.equal('Hello, World!');
    });
});
