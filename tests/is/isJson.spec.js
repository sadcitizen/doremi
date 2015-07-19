'use strict';

import chai from 'chai';
import isJson from '../../src/is/isJson';

const expect = chai.expect;

describe('is/isJson()', () => {
    it('Should return true for a json string', () => {
        expect(isJson(JSON.stringify({}))).to.equal(true);
        expect(isJson(JSON.stringify({ a: 'b', c: 'd' }))).to.equal(true);
        expect(isJson(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).to.equal(true);
    });

    it('Should return false for other strings', () => {
        expect(isJson('')).to.equal(false);
        expect(isJson('  ')).to.equal(false);
        expect(isJson('hello')).to.equal(false);
        expect(isJson('apple, orange')).to.equal(false);
    });
});