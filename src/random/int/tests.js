import isInteger from '../../number/is-int';
import randomInteger from '.';

describe('random/int()', () => {
    let num;
    let range;

    beforeAll(() => {
        num = randomInteger();
        range = randomInteger(0, 1000);
    });

    test('returns an integer', () => {
        expect(isInteger(num)).toBe(true);
        expect(isInteger(range)).toBe(true);
    });

    test('returns an integer inside range', () => {
        expect(range > 0 && range < 1000).toBe(true);
    });
});
