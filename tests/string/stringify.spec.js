'use strict';

import chai from 'chai';
import stringify from '../../src/string/stringify';

const expect = chai.expect;

describe('string/stringify()', () => {
    it('Should convert null to empty string', () => {
        expect(stringify(null)).to.equal('');
    });

    it('Should convert undefined to empty string', () => {
        expect(stringify()).to.equal('');
        expect(stringify(undefined)).to.equal('');
        expect(stringify(void 0)).to.equal('');
    });

    it('Should return string unchanged', () => {
        expect(stringify('')).to.equal('');
        expect(stringify('lorem')).to.equal('lorem');
        /* jshint -W053 */
        expect(stringify(new String('lorem'))).to.equal('lorem');
        /* jshint +W053 */
    });

    it('Should return number as string', () => {
        expect(stringify(0)).to.equal('0');
        expect(stringify(1234.56)).to.equal('1234.56');
        /* jshint -W053 */
        expect(stringify(new Number(42))).to.equal('42');
        /* jshint +W053 */
        expect(stringify(NaN)).to.equal('NaN');
    });

    it('Should return boolean as string', () => {
        expect(stringify(true)).to.equal('true');
        expect(stringify(false)).to.equal('false');
        /* jshint -W053 */
        expect(stringify(new Boolean(true))).to.equal('true');
        /* jshint +W053 */
    });

    it('Should return regexp as string', () => {
        expect(stringify(/[a-z0-9]/)).to.equal('/[a-z0-9]/');
        expect(stringify(/[a-z0-9]/i)).to.equal('/[a-z0-9]/i');
        expect(stringify(/[a-z0-9]/ig)).to.equal('/[a-z0-9]/gi');
        expect(stringify(/[a-z0-9]/igm)).to.equal('/[a-z0-9]/gim');
    });
});