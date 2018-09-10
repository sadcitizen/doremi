import mockDate from 'mockdate';
import isTomorrow from '.';

describe('date/isTomorrow()', () => {
    test('returns true if the date is tomorrow', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isTomorrow(new Date(2015, 2, 24))).toBe(true);

        mockDate.reset();
    });

    test('returns false if the date is not tomorrow', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isTomorrow(new Date(2015, 2, 22))).toBe(false);
        expect(isTomorrow(new Date(2015, 2, 23))).toBe(false);
        expect(isTomorrow(new Date(2015, 2, 25))).toBe(false);
        expect(isTomorrow(new Date(2015, 2, 26))).toBe(false);

        mockDate.reset();
    });

    test('throws the error if value is invalid', () => {
        const invalidDate = new Date('Invalid date');

        expect(() => isTomorrow(invalidDate)).toThrow('A valid date is expected');
    });
});
