import date, {
    add,
    clone,
    equals,
    format,
    isDate,
    isFuture,
    isLeapYear,
    isPast,
    isToday,
    isTomorrow,
    isValid,
    isYesterday,
    startOf
} from '.';

describe('doremi/date', () => {
    test('imports doremi/date as object', () => {
        expect(date).toEqual(expect.any(Object));
    });

    test('doremi/date has correct properties', () => {
        expect(date).toHaveProperty('add', add);
        expect(date).toHaveProperty('clone', clone);
        expect(date).toHaveProperty('equals', equals);
        expect(date).toHaveProperty('format', format);
        expect(date).toHaveProperty('isDate', isDate);
        expect(date).toHaveProperty('isFuture', isFuture);
        expect(date).toHaveProperty('isLeapYear', isLeapYear);
        expect(date).toHaveProperty('isPast', isPast);
        expect(date).toHaveProperty('isToday', isToday);
        expect(date).toHaveProperty('isTomorrow', isTomorrow);
        expect(date).toHaveProperty('isValid', isValid);
        expect(date).toHaveProperty('isYesterday', isYesterday);
        expect(date).toHaveProperty('startOf', startOf);
    });
});
