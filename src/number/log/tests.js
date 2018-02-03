import log from '.';

describe('number/log()', () => {
    test('Returns logarithm of a number', () => {
        expect(log(2, 2)).toBe(1);
        expect(log(9, 3)).toBe(2);
        expect(log(64, 4)).toBe(3);
        expect(log(10000, 10)).toBe(4);
    });

    test('Returns logarithm of zero', function() {
        expect(log(0)).toBe(-Infinity);
    });

    test('Returns logarithm of negative number', function() {
        expect(log(-2, 2)).toEqual(NaN);
        expect(log(-9, 3)).toEqual(NaN);
        expect(log(-64, 4)).toEqual(NaN);
        expect(log(-10000, 10)).toEqual(NaN);
    });

    test('Returns logarithm with negative base', function() {
        expect(log(2, -2)).toEqual(NaN);
        expect(log(9, -3)).toEqual(NaN);
        expect(log(64, -4)).toEqual(NaN);
        expect(log(10000, -10)).toEqual(NaN);
    });
});
