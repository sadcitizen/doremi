import * as regex from '../../internal/regexes/template';
import template from '.';

/* eslint-disable no-_template-curly-in-string */
describe('string/_template()', () => {
    test('returns the string replaced with _template values', () => {
        const lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };

        expect(template('${a} ${b} ${c}', lorem)).toBe('lorem ipsum dolor');
        expect(template('${a} ipsum ${c} sit', lorem)).toBe('lorem ipsum dolor sit');
    });

    test('works with nested values', () => {
        const lorem = {
            ipsum: {
                dolor: 'sit'
            },
            sit: {
                amet: 'consectetur'
            },
            foo: ['foo', 'bar']
        };

        expect(template('${ ipsum.dolor } ${ sit.amet }', lorem)).toBe('sit consectetur');
        expect(template('${ ipsum.dolor } ${ foo.0 }', lorem)).toBe('sit foo');
    });

    test('works with arrays', () => {
        const lorem = ['lorem', 'ipsum', 'dolor'];

        expect(template('${0} ${1} ${2}', lorem)).toBe('lorem ipsum dolor');
        expect(template('${0} ipsum ${2} sit', lorem)).toBe('lorem ipsum dolor sit');
    });

    test('do not replace undefined values', () => {
        const lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };

        expect(template('${a} ${b} ${c} ${d}', lorem)).toBe('lorem ipsum dolor ${d}');
    });

    test('works with mustache syntax', () => {
        const lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };

        expect(template('{{a}} {{b}} {{c}}', lorem, regex.mustache)).toBe('lorem ipsum dolor');
    });

    test('works with underscore syntax', () => {
        const lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };

        expect(template('<%= a %> <%= b %> <%= c %>', lorem, regex.underscore)).toBe('lorem ipsum dolor');
    });
});
/* eslint-enable no-_template-curly-in-string */
