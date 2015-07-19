'use strict';

import chai from 'chai';
import remove from '../../src/string/remove';

const expect = chai.expect;

describe('string/remove()', () => {
    it('Should remove a substring from a string', () => {
        var hello = 'Hello, World!';

        expect(remove(hello, 0, 2)).to.equal('llo, World!');
        expect(remove(hello, 0, 100)).to.equal('');
        expect(remove(hello, 0, hello.length)).to.equal('');
        expect(remove(hello, 90, 100)).to.equal('Hello, World!');
    });

    it('Should treat undefined index as zero', () => {
        var hello = 'Hello, World!';

        expect(remove(hello)).to.equal(hello);
        expect(remove(hello, void 0)).to.equal(hello);
        expect(remove(hello, void 0, void 0)).to.equal(hello);
        expect(remove(hello, null)).to.equal(hello);
        expect(remove(hello, null, null)).to.equal(hello);
    });

    it('Should accept negative indexes', () => {
        var hello = 'Hello, World!';

        expect(remove(hello, 0, -3)).to.equal('ld!');
        expect(remove(hello, 5, -1)).to.equal('Hello!');
        expect(remove(hello, 2, -2)).to.equal('Hed!');
        expect(remove(hello, -2, -1)).to.equal('Hello, Worl!');
        expect(remove(hello, -100, -90)).to.equal('Hello, World!');
    });
});