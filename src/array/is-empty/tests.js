import isEmpty from '.';

describe('array/isEmpty()', () => {
    test('Returns true if the array is undefined', () => {
        expect(isEmpty()).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(void 0)).toBe(true);
    });

    test('Returns true if the array is null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('Returns true if the array is zero length', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('Returns false if the array is not empty', () => {
        expect(isEmpty([0])).toBe(false);
        expect(isEmpty(['1'])).toBe(false);
        expect(isEmpty([[]])).toBe(false);
        expect(isEmpty([{}])).toBe(false);
        expect(isEmpty([null])).toBe(false);
    });
});
