import date, { add, clone, difference, format, isDate, isValid } from '.';

describe('doremi/date', () => {
    test('imports doremi/date as object', () => {
        expect(date).toEqual(expect.any(Object));
    });

    test('doremi/date has correct properties', () => {
        expect(date).toHaveProperty('add', add);
        expect(date).toHaveProperty('clone', clone);
        expect(date).toHaveProperty('difference', difference);
        expect(date).toHaveProperty('format', format);
        expect(date).toHaveProperty('isDate', isDate);
        expect(date).toHaveProperty('isValid', isValid);
    });
});