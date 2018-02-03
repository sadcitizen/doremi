import func, { after, before, compose, defer, delay, flip, identity, isFunction, memoize, negate, noop, once, partial, partialRight, pipe } from '.';

describe('doremi/func', () => {
    test('Imports doremi/func as object', () => {
        expect(func).toEqual(expect.any(Object));
    });

    test('doremi/func has correct properties', () => {
        expect(func).toHaveProperty('after', after);
        expect(func).toHaveProperty('before', before);
        expect(func).toHaveProperty('compose', compose);
        expect(func).toHaveProperty('defer', defer);
        expect(func).toHaveProperty('delay', delay);
        expect(func).toHaveProperty('flip', flip);
        expect(func).toHaveProperty('identity', identity);
        expect(func).toHaveProperty('isFunction', isFunction);
        expect(func).toHaveProperty('memoize', memoize);
        expect(func).toHaveProperty('negate', negate);
        expect(func).toHaveProperty('noop', noop);
        expect(func).toHaveProperty('once', once);
        expect(func).toHaveProperty('partial', partial);
        expect(func).toHaveProperty('partialRight', partialRight);
        expect(func).toHaveProperty('pipe', pipe);
    });
});
