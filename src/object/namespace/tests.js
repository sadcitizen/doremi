import namespace from '.';

describe('object/namespace()', () => {
    test('Create nested properties', () => {
        const target = {};

        namespace(target, 'lorem.ipsum.dolor');

        expect(target).toEqual({ lorem: { ipsum: { dolor: {} } } });
    });

    test('Reuse existing nested properties', () => {
        const target = { foo: 'bar' };

        namespace(target, 'baz.quux');

        expect(target).toEqual({ foo: 'bar', baz: { quux: {} } });
    });

    test('returns original object if no path', () => {
        const target = { foo: 'bar' };

        expect(namespace(target)).toEqual({ foo: 'bar' });
        expect(namespace(target)).toBe(target);
    });

    test('Do not overwrite existing nested properties', () => {
        const target = { foo: { bar: { baz: {} } } };

        namespace(target, 'foo.bar.quux');

        expect(target).toEqual({ foo: { bar: { baz: {}, quux: {} } } });
    });
});
