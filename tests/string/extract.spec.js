'use strict';

import chai from 'chai';
import extract from '../../src/string/extract';

const expect = chai.expect;

describe('string/extract()', () => {
    it('Should treat null and undefined target as empty string', () => {
        expect(extract(null, '${lorem}')).to.equal(null);
        expect(extract(undefined, '${lorem}')).to.equal(null);
    });

    it('Should extract values', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '${user}@${host}.${domain}')).to.deep.equal(result);
    });

    it('Should work with custom separators', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '{user}@{host}.{domain}', ['{', '}'])).to.deep.equal(result);
        expect(extract('bill@gates.com', '$user$@$host$.$domain$', ['$', '$'])).to.deep.equal(result);
        expect(extract('bill@gates.com', '{%user%}@{%host%}.{%domain%}', ['{%', '%}'])).to.deep.equal(result);
    });
});