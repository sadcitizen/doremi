import float from '.';
import isFloat from '../../number/is-float';

describe('random/float()', () => {
    let floated, range, fix;

    beforeAll(() => {
        floated = float();
        range = float(0.113, 94.378);
        fix = float(0, 10, 3);
    });

    test('returns a float', () => {
        expect(isFloat(floated)).toBe(true);
        expect(isFloat(range)).toBe(true);
        expect(isFloat(fix)).toBe(true);
    });

    test('returns a float inside range', () => {
        expect(range > 0.113 && range < 94.378).toBe(true);
        expect(fix > 0 && fix < 10).toBe(true);
    });

    test('returns a float with less than 3 digits after point', () => {
        expect(('' + fix).split('.')[1].length).toBeLessThanOrEqual(3);
        expect(('' + float(0, 10, 3)).split('.')[1].length).toBeLessThanOrEqual(3);
        expect(('' + float(0, 100, 3)).split('.')[1].length).toBeLessThanOrEqual(3);
    });
});
