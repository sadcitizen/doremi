import format from '.';

describe('date/format()', () => {
    test('formats year to string', () => {
        const first = new Date(2015, 1, 1);
        const second = new Date(909, 1, 1);

        expect(format(first, 'YYYY')).toBe('2015');
        expect(format(first, 'YYY')).toBe('2015');
        expect(format(first, 'YY')).toBe('15');
        expect(format(first, 'Y')).toBe('15');

        expect(format(second, 'YYYY')).toBe('0909');
        expect(format(second, 'YYY')).toBe('909');
        expect(format(second, 'YY')).toBe('09');
        expect(format(second, 'Y')).toBe('9');
    });

    test('formats month to string', () => {
        const first = new Date(2015, 0, 1);
        const second = new Date(2015, 11, 1);

        expect(format(first, 'MMMM')).toBe('January');
        expect(format(first, 'MMM')).toBe('Jan.');
        expect(format(first, 'MM')).toBe('01');
        expect(format(first, 'M')).toBe('1');

        expect(format(second, 'MMMM')).toBe('December');
        expect(format(second, 'MMM')).toBe('Dec.');
        expect(format(second, 'MM')).toBe('12');
        expect(format(second, 'M')).toBe('12');
    });

    test('formats days to string', () => {
        const first = new Date(2015, 0, 1);
        const second = new Date(2015, 0, 20);

        expect(format(first, 'DD')).toBe('01');
        expect(format(first, 'D')).toBe('1');

        expect(format(second, 'DD')).toBe('20');
        expect(format(second, 'D')).toBe('20');
    });

    test('formats weekday to string', () => {
        const monday = new Date(2015, 0, 5);
        const tuesday = new Date(2015, 0, 6);
        const wednesday = new Date(2015, 0, 7);
        const thursday = new Date(2015, 0, 8);
        const friday = new Date(2015, 0, 9);
        const saturday = new Date(2015, 0, 10);
        const sunday = new Date(2015, 0, 11);

        expect(format(monday, 'DDDD')).toBe('Monday');
        expect(format(monday, 'DDD')).toBe('Mon');

        expect(format(tuesday, 'DDDD')).toBe('Tuesday');
        expect(format(tuesday, 'DDD')).toBe('Tue');

        expect(format(wednesday, 'DDDD')).toBe('Wednesday');
        expect(format(wednesday, 'DDD')).toBe('Wed');

        expect(format(thursday, 'DDDD')).toBe('Thursday');
        expect(format(thursday, 'DDD')).toBe('Thu');

        expect(format(friday, 'DDDD')).toBe('Friday');
        expect(format(friday, 'DDD')).toBe('Fri');

        expect(format(saturday, 'DDDD')).toBe('Saturday');
        expect(format(saturday, 'DDD')).toBe('Sat');

        expect(format(sunday, 'DDDD')).toBe('Sunday');
        expect(format(sunday, 'DDD')).toBe('Sun');
    });

    test('formats hours to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 11, 9, 6);
        const third = new Date(2015, 1, 1, 22, 0, 0);

        expect(format(first, 'HH')).toBe('00');
        expect(format(first, 'H')).toBe('0');

        expect(format(first, 'hh')).toBe('00');
        expect(format(first, 'h')).toBe('0');

        expect(format(second, 'HH')).toBe('11');
        expect(format(second, 'H')).toBe('11');

        expect(format(second, 'hh')).toBe('11');
        expect(format(second, 'h')).toBe('11');

        expect(format(third, 'HH')).toBe('22');
        expect(format(third, 'H')).toBe('22');

        expect(format(third, 'hh')).toBe('10');
        expect(format(third, 'h')).toBe('10');
    });

    test('formats minutes to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 0, 9, 6);
        const third = new Date(2015, 1, 1, 0, 0, 0);

        expect(format(first, 'mm')).toBe('45');
        expect(format(first, 'm')).toBe('45');

        expect(format(second, 'mm')).toBe('09');
        expect(format(second, 'm')).toBe('9');

        expect(format(third, 'mm')).toBe('00');
        expect(format(third, 'm')).toBe('0');
    });

    test('formats seconds to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 0, 9, 6);
        const third = new Date(2015, 1, 1, 0, 0, 0);

        expect(format(first, 'ss')).toBe('29');
        expect(format(first, 's')).toBe('29');

        expect(format(second, 'ss')).toBe('06');
        expect(format(second, 's')).toBe('6');

        expect(format(third, 'ss')).toBe('00');
        expect(format(third, 's')).toBe('0');
    });

    test('formats milliseconds to string', () => {
        const first = new Date(2015, 1, 1, 1, 1, 1, 1);
        const second = new Date(2015, 1, 1, 1, 1, 1, 10);
        const third = new Date(2015, 1, 1, 1, 1, 1, 100);

        expect(format(first, 'fff')).toBe('001');
        expect(format(first, 'ff')).toBe('00');
        expect(format(first, 'f')).toBe('0');

        expect(format(second, 'fff')).toBe('010');
        expect(format(second, 'ff')).toBe('01');
        expect(format(second, 'f')).toBe('0');

        expect(format(third, 'fff')).toBe('100');
        expect(format(third, 'ff')).toBe('10');
        expect(format(third, 'f')).toBe('1');
    });

    test('formats am/pm to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 11, 9, 6);
        const third = new Date(2015, 1, 1, 22, 0, 0);

        expect(format(first, 'TT')).toBe('AM');
        expect(format(first, 'tt')).toBe('am');

        expect(format(second, 'TT')).toBe('AM');
        expect(format(second, 'tt')).toBe('am');

        expect(format(third, 'TT')).toBe('PM');
        expect(format(third, 'tt')).toBe('pm');
    });

    test('formats quarter to string', () => {
        expect(format(new Date(2015, 0, 1), 'Q')).toBe('1');
        expect(format(new Date(2015, 1, 1), 'Q')).toBe('1');
        expect(format(new Date(2015, 2, 1), 'Q')).toBe('1');
        expect(format(new Date(2015, 3, 1), 'Q')).toBe('2');
        expect(format(new Date(2015, 4, 1), 'Q')).toBe('2');
        expect(format(new Date(2015, 5, 1), 'Q')).toBe('2');
        expect(format(new Date(2015, 6, 1), 'Q')).toBe('3');
        expect(format(new Date(2015, 7, 1), 'Q')).toBe('3');
        expect(format(new Date(2015, 8, 1), 'Q')).toBe('3');
        expect(format(new Date(2015, 9, 1), 'Q')).toBe('4');
        expect(format(new Date(2015, 10, 1), 'Q')).toBe('4');
        expect(format(new Date(2015, 11, 1), 'Q')).toBe('4');
    });

    test('formats date to string', () => {
        const date = new Date(2015, 1, 1, 13, 29, 6);
        expect(format(date, 'YYYY')).toBe('2015');
        expect(format(date, 'DD-MM-YYYY HH:mm:ss')).toBe('01-02-2015 13:29:06');
        expect(format(date, 'DD.MM.YYYY hh:mm:ss TT')).toBe('01.02.2015 01:29:06 PM');
        expect(format(date, 'DD/MM/YY h:m:s tt')).toBe('01/02/15 1:29:6 pm');
    });

    test('formats date to string with localization', () => {
        const date = new Date(2015, 1, 4, 13, 29, 6);
        expect(format(date, 'DDDD, DD MMMM')).toBe('Wednesday, 04 February');
        expect(format(date, 'DDD, DD MMM')).toBe('Wed, 04 Feb.');

        const ru = {
            months: {
                shorts: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                longs: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            },
            days: {
                shorts: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                longs: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
            }
        };

        expect(format(date, 'DDDD, DD MMMM', ru)).toBe('Среда, 04 Февраль');
        expect(format(date, 'DDD, DD MMM', ru)).toBe('Ср, 04 Фев');
    });

    test('throws exception if date is invalid', () => {
        expect(() => format(new Date('Invalid date'), 'DD/MM/YY h:m:s tt')).toThrow('A valid date is expected');
    });
});
