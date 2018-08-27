import isInteger from '../../number/is-integer';
import integer from '.';

describe('random/integer()', () => {
    let num;
    let range;

    beforeAll(() => {
        num = integer();
        range = integer(0, 1000);
    });

    test('returns an integer', () => {
        expect(isInteger(num)).toBe(true);
        expect(isInteger(range)).toBe(true);
    });

    test('returns an integer inside range', () => {
        expect(range > 0 && range < 1000).toBe(true);
    });
});
