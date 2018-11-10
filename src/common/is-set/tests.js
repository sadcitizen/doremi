import VOID_0 from '../../constants/void-0';
import isSet from '.';

describe('common/isSet()', () => {
    test('returns true if the value is an instance of Set', () => {
        const s = new Set();

        s.add({});
        s.add([]);

        expect(isSet(s)).toBe(true);
    });

    test('returns false if the value is not an instance of Set', () => {
        expect(isSet(VOID_0)).toBe(false);
        expect(isSet(null)).toBe(false);
        expect(isSet(NaN)).toBe(false);
        expect(isSet(true)).toBe(false);
        expect(isSet(42)).toBe(false);
        expect(isSet([])).toBe(false);
        expect(isSet({})).toBe(false);
        expect(isSet(new Date())).toBe(false);
        expect(isSet(/\s+/ig)).toBe(false);
        expect(isSet('')).toBe(false);
        expect(isSet(String(42))).toBe(false);
    });
});
