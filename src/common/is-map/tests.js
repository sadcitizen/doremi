import VOID_0 from '../../constants/void-0';
import isMap from '.';

describe('common/isMap()', () => {
    test('returns true if the value is an instance of Map', () => {
        const map = new Map();

        map.set({}, {});
        map.set([], []);

        expect(isMap(map)).toBe(true);
    });

    test('returns false if the value is not an instance of Map', () => {
        expect(isMap(VOID_0)).toBe(false);
        expect(isMap(null)).toBe(false);
        expect(isMap(NaN)).toBe(false);
        expect(isMap(true)).toBe(false);
        expect(isMap(42)).toBe(false);
        expect(isMap([])).toBe(false);
        expect(isMap({})).toBe(false);
        expect(isMap(new Date())).toBe(false);
        expect(isMap(/\s+/ig)).toBe(false);
        expect(isMap('')).toBe(false);
        expect(isMap(String(42))).toBe(false);
    });
});
