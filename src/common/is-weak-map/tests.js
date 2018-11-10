import VOID_0 from '../../constants/void-0';
import isWeakMap from '.';

describe('common/isWeakMap()', () => {
    test('returns true if the value is an instance of WeakMap', () => {
        const wm = new WeakMap();

        wm.set({}, {});
        wm.set([], []);

        expect(isWeakMap(wm)).toBe(true);
    });

    test('returns false if the value is not an instance of WeakMap', () => {
        expect(isWeakMap(VOID_0)).toBe(false);
        expect(isWeakMap(null)).toBe(false);
        expect(isWeakMap(NaN)).toBe(false);
        expect(isWeakMap(true)).toBe(false);
        expect(isWeakMap(42)).toBe(false);
        expect(isWeakMap([])).toBe(false);
        expect(isWeakMap({})).toBe(false);
        expect(isWeakMap(new Date())).toBe(false);
        expect(isWeakMap(/\s+/ig)).toBe(false);
        expect(isWeakMap('')).toBe(false);
        expect(isWeakMap(String(42))).toBe(false);
    });
});
