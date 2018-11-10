import VOID_0 from '../../constants/void-0';
import isSymbol from '.';

describe('common/isSymbol()', () => {
    test('returns true if the value is a Symbol primitive', () => {
        expect(isSymbol(Symbol('lorem'))).toBe(true);
        expect(isSymbol(Symbol.for('lorem'))).toBe(true);
        expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    test('returns false if the value is not a Symbol primitive', () => {
        expect(isSymbol(VOID_0)).toBe(false);
        expect(isSymbol(null)).toBe(false);
        expect(isSymbol(NaN)).toBe(false);
        expect(isSymbol(true)).toBe(false);
        expect(isSymbol(42)).toBe(false);
        expect(isSymbol([])).toBe(false);
        expect(isSymbol({})).toBe(false);
        expect(isSymbol(new Date())).toBe(false);
        expect(isSymbol(/\s+/ig)).toBe(false);
        expect(isSymbol('')).toBe(false);
        expect(isSymbol(String(42))).toBe(false);
    });
});
