import { expect } from 'chai';
import template from '.';
import * as regex from '../../internal/regexes/template';

describe('string/template()', () => {
    it('Returns the string replaced with template values', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('${a} ${b} ${c}', lorem)).to.equal('lorem ipsum dolor');
        expect(template('${a} ipsum ${c} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Works with nested values', () => {
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

    it('Works with arrays', () => {
        var lorem = ['lorem', 'ipsum', 'dolor'];
        expect(template('${0} ${1} ${2}', lorem)).to.equal('lorem ipsum dolor');
        expect(template('${0} ipsum ${2} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Do not replace undefined values', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('${a} ${b} ${c} ${d}', lorem)).to.equal('lorem ipsum dolor ${d}');
    });

    it('Works with mustache syntax', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('{{a}} {{b}} {{c}}', lorem, regex.mustache)).to.equal('lorem ipsum dolor');
    });

    it('Works with underscore syntax', () => {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(template('<%= a %> <%= b %> <%= c %>', lorem, regex.underscore)).to.equal('lorem ipsum dolor');
    });
});
