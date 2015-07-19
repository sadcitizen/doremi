'use strict';

import chai from 'chai';
import template from '../../src/string/template';

const expect = chai.expect;

describe('string/template()', () => {
    it('Should return the string replaced with template values', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('${a} ${b} ${c}', lorem)).to.equal('lorem ipsum dolor');
        expect(template('${a} ipsum ${c} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Should work with nested values', () => {
        var lorem = {
            ipsum: {
                dolor: 'sit'
            },
            sit: {
                amet: 'consectetur'
            },
            foo: ['foo', 'bar']
        };
        expect(template('${ ipsum.dolor } ${ sit.amet }', lorem)).to.equal('sit consectetur');
        expect(template('${ ipsum.dolor } ${ foo.0 }', lorem)).to.equal('sit foo');
    });

    it('Should work with arrays', () => {
        var lorem = ['lorem', 'ipsum', 'dolor'];
        expect(template('${0} ${1} ${2}', lorem)).to.equal('lorem ipsum dolor');
        expect(template('${0} ipsum ${2} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Should treat null and undefined target as empty string', () => {
        expect(template(null, { lorem: 'lorem' })).to.equal('');
        expect(template(undefined, { lorem: 'lorem' })).to.equal('');
    });

    it('Should not replace undefined values', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('${a} ${b} ${c} ${d}', lorem)).to.equal('lorem ipsum dolor ${d}');
    });

    it('Should treat null values as empty string', () => {
        expect(template('${lorem}', { lorem: null })).to.equal('');
    });

    it('Should work with mustache syntax', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('{{a}} {{b}} {{c}}', lorem, /\{\{([^\}]+)\}\}/g)).to.equal('lorem ipsum dolor');
    });

    it('Should work with underscore syntax', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g)).to.equal('lorem ipsum dolor');
    });
});