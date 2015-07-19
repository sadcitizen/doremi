'use strict';

import chai from 'chai';
import toString from '../../src/to/toString';

const expect = chai.expect;

describe('to/toString()', () => {
    it('Should convert null to empty string', () => {
        expect(toString(null)).to.equal('');
    });

    it('Should convert undefined to empty string', () => {
        expect(toString()).to.equal('');
        expect(toString(undefined)).to.equal('');
        expect(toString(void 0)).to.equal('');
    });

    it('Should return string unchanged', () => {
        expect(toString('')).to.equal('');
        expect(toString('lorem')).to.equal('lorem');
        /* jshint -W053 */
        expect(toString(new String('lorem'))).to.equal('lorem');
        /* jshint +W053 */
    });

    it('Should return number as string', () => {
        expect(toString(0)).to.equal('0');
        expect(toString(1234.56)).to.equal('1234.56');
        /* jshint -W053 */
        expect(toString(new Number(42))).to.equal('42');
        /* jshint +W053 */
        expect(toString(NaN)).to.equal('NaN');
    });

    it('Should return boolean as string', () => {
        expect(toString(true)).to.equal('true');
        expect(toString(false)).to.equal('false');
        /* jshint -W053 */
        expect(toString(new Boolean(true))).to.equal('true');
        /* jshint +W053 */
    });

    it('Should return regexp as string', () => {
        expect(toString(/[a-z0-9]/)).to.equal('/[a-z0-9]/');
        expect(toString(/[a-z0-9]/i)).to.equal('/[a-z0-9]/i');
        expect(toString(/[a-z0-9]/ig)).to.equal('/[a-z0-9]/gi');
        expect(toString(/[a-z0-9]/igm)).to.equal('/[a-z0-9]/gim');
    });
});