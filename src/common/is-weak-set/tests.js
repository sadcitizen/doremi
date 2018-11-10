import VOID_0 from '../../constants/void-0';
import isWeakSet from '.';

describe('common/isWeakSet()', () => {
    test('returns true if the value is an instance of WeakSet', () => {
        const ws = new WeakSet();

        ws.add({});
        ws.add([]);

        expect(isWeakSet(ws)).toBe(true);
    });

    test('returns false if the value is not an instance of WeakSet', () => {
        expect(isWeakSet(VOID_0)).toBe(false);
        expect(isWeakSet(null)).toBe(false);
        expect(isWeakSet(NaN)).toBe(false);
        expect(isWeakSet(true)).toBe(false);
        expect(isWeakSet(42)).toBe(false);
        expect(isWeakSet([])).toBe(false);
        expect(isWeakSet({})).toBe(false);
        expect(isWeakSet(new Date())).toBe(false);
        expect(isWeakSet(/\s+/ig)).toBe(false);
        expect(isWeakSet('')).toBe(false);
        expect(isWeakSet(String(42))).toBe(false);
    });
});
