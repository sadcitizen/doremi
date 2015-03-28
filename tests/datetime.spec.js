var dt = require('../build/datetime.min');
var expect = require('chai').expect;

describe('Datetime', function () {
    describe('.format()', function () {
        it('Should format year to string', function () {
            var first = new Date(2015, 1, 1);
            var second = new Date(909, 1, 1);

            expect(dt.format(first, 'YYYY')).to.equal('2015');
            expect(dt.format(first, 'YYY')).to.equal('2015');
            expect(dt.format(first, 'YY')).to.equal('15');
            expect(dt.format(first, 'Y')).to.equal('15');

            expect(dt.format(second, 'YYYY')).to.equal('0909');
            expect(dt.format(second, 'YYY')).to.equal('909');
            expect(dt.format(second, 'YY')).to.equal('09');
            expect(dt.format(second, 'Y')).to.equal('9');
        });

        it('Should format month to string', function () {
            var first = new Date(2015, 0, 1);
            var second = new Date(2015, 11, 1);

            expect(dt.format(first, 'MMMM')).to.equal('January');
            expect(dt.format(first, 'MMM')).to.equal('Jan.');
            expect(dt.format(first, 'MM')).to.equal('01');
            expect(dt.format(first, 'M')).to.equal('1');

            expect(dt.format(second, 'MMMM')).to.equal('December');
            expect(dt.format(second, 'MMM')).to.equal('Dec.');
            expect(dt.format(second, 'MM')).to.equal('12');
            expect(dt.format(second, 'M')).to.equal('12');
        });

        it('Should format days to string', function () {
            var first = new Date(2015, 0, 1);
            var second = new Date(2015, 0, 20);

            expect(dt.format(first, 'DD')).to.equal('01');
            expect(dt.format(first, 'D')).to.equal('1');

            expect(dt.format(second, 'DD')).to.equal('20');
            expect(dt.format(second, 'D')).to.equal('20');
        });

        it('Should format weekday to string', function () {
            var monday = new Date(2015, 0, 5);
            var tuesday = new Date(2015, 0, 6);
            var wednesday = new Date(2015, 0, 7);
            var thursday = new Date(2015, 0, 8);
            var friday = new Date(2015, 0, 9);
            var saturday = new Date(2015, 0, 10);
            var sunday = new Date(2015, 0, 11);

            expect(dt.format(monday, 'DDDD')).to.equal('Monday');
            expect(dt.format(monday, 'DDD')).to.equal('Mon');

            expect(dt.format(tuesday, 'DDDD')).to.equal('Tuesday');
            expect(dt.format(tuesday, 'DDD')).to.equal('Tue');

            expect(dt.format(wednesday, 'DDDD')).to.equal('Wednesday');
            expect(dt.format(wednesday, 'DDD')).to.equal('Wed');

            expect(dt.format(thursday, 'DDDD')).to.equal('Thursday');
            expect(dt.format(thursday, 'DDD')).to.equal('Thu');

            expect(dt.format(friday, 'DDDD')).to.equal('Friday');
            expect(dt.format(friday, 'DDD')).to.equal('Fri');

            expect(dt.format(saturday, 'DDDD')).to.equal('Saturday');
            expect(dt.format(saturday, 'DDD')).to.equal('Sat');

            expect(dt.format(sunday, 'DDDD')).to.equal('Sunday');
            expect(dt.format(sunday, 'DDD')).to.equal('Sun');
        });

        it('Should format hours to string', function () {
            var first = new Date(2015, 1, 1, 0, 45, 29);
            var second = new Date(2015, 1, 1, 11, 9, 6);
            var third = new Date(2015, 1, 1, 22, 0, 0);

            expect(dt.format(first, 'HH')).to.equal('00');
            expect(dt.format(first, 'H')).to.equal('0');

            expect(dt.format(first, 'hh')).to.equal('00');
            expect(dt.format(first, 'h')).to.equal('0');

            expect(dt.format(second, 'HH')).to.equal('11');
            expect(dt.format(second, 'H')).to.equal('11');

            expect(dt.format(second, 'hh')).to.equal('11');
            expect(dt.format(second, 'h')).to.equal('11');

            expect(dt.format(third, 'HH')).to.equal('22');
            expect(dt.format(third, 'H')).to.equal('22');

            expect(dt.format(third, 'hh')).to.equal('10');
            expect(dt.format(third, 'h')).to.equal('10');
        });

        it('Should format minutes to string', function () {
            var first = new Date(2015, 1, 1, 0, 45, 29);
            var second = new Date(2015, 1, 1, 0, 9, 6);
            var third = new Date(2015, 1, 1, 0, 0, 0);

            expect(dt.format(first, 'mm')).to.equal('45');
            expect(dt.format(first, 'm')).to.equal('45');

            expect(dt.format(second, 'mm')).to.equal('09');
            expect(dt.format(second, 'm')).to.equal('9');

            expect(dt.format(third, 'mm')).to.equal('00');
            expect(dt.format(third, 'm')).to.equal('0');
        });

        it('Should format seconds to string', function () {
            var first = new Date(2015, 1, 1, 0, 45, 29);
            var second = new Date(2015, 1, 1, 0, 9, 6);
            var third = new Date(2015, 1, 1, 0, 0, 0);

            expect(dt.format(first, 'ss')).to.equal('29');
            expect(dt.format(first, 's')).to.equal('29');

            expect(dt.format(second, 'ss')).to.equal('06');
            expect(dt.format(second, 's')).to.equal('6');

            expect(dt.format(third, 'ss')).to.equal('00');
            expect(dt.format(third, 's')).to.equal('0');
        });

        it('Should format milliseconds to string', function () {
            var first = new Date(2015, 1, 1, 1, 1, 1, 1);
            var second = new Date(2015, 1, 1, 1, 1, 1, 10);
            var third = new Date(2015, 1, 1, 1, 1, 1, 100);

            expect(dt.format(first, 'fff')).to.equal('001');
            expect(dt.format(first, 'ff')).to.equal('00');
            expect(dt.format(first, 'f')).to.equal('0');

            expect(dt.format(second, 'fff')).to.equal('010');
            expect(dt.format(second, 'ff')).to.equal('01');
            expect(dt.format(second, 'f')).to.equal('0');

            expect(dt.format(third, 'fff')).to.equal('100');
            expect(dt.format(third, 'ff')).to.equal('10');
            expect(dt.format(third, 'f')).to.equal('1');
        });

        it('Should format am/pm to string', function () {
            var first = new Date(2015, 1, 1, 0, 45, 29);
            var second = new Date(2015, 1, 1, 11, 9, 6);
            var third = new Date(2015, 1, 1, 22, 0, 0);

            expect(dt.format(first, 'TT')).to.equal('AM');
            expect(dt.format(first, 'tt')).to.equal('am');

            expect(dt.format(second, 'TT')).to.equal('AM');
            expect(dt.format(second, 'tt')).to.equal('am');

            expect(dt.format(third, 'TT')).to.equal('PM');
            expect(dt.format(third, 'tt')).to.equal('pm');
        });

        it('Should format quarter to string', function () {
            expect(dt.format(new Date(2015, 0, 1), 'Q')).to.equal('1');
            expect(dt.format(new Date(2015, 1, 1), 'Q')).to.equal('1');
            expect(dt.format(new Date(2015, 2, 1), 'Q')).to.equal('1');
            expect(dt.format(new Date(2015, 3, 1), 'Q')).to.equal('2');
            expect(dt.format(new Date(2015, 4, 1), 'Q')).to.equal('2');
            expect(dt.format(new Date(2015, 5, 1), 'Q')).to.equal('2');
            expect(dt.format(new Date(2015, 6, 1), 'Q')).to.equal('3');
            expect(dt.format(new Date(2015, 7, 1), 'Q')).to.equal('3');
            expect(dt.format(new Date(2015, 8, 1), 'Q')).to.equal('3');
            expect(dt.format(new Date(2015, 9, 1), 'Q')).to.equal('4');
            expect(dt.format(new Date(2015, 10, 1), 'Q')).to.equal('4');
            expect(dt.format(new Date(2015, 11, 1), 'Q')).to.equal('4');
        });

        it('Should format date to string', function () {
            var date = new Date(2015, 1, 1, 13, 29, 6);
            expect(dt.format(date, 'YYYY')).to.equal('2015');
            expect(dt.format(date, 'DD-MM-YYYY HH:mm:ss')).to.equal('01-02-2015 13:29:06');
            expect(dt.format(date, 'DD.MM.YYYY hh:mm:ss TT')).to.equal('01.02.2015 01:29:06 PM');
            expect(dt.format(date, 'DD/MM/YY h:m:s tt')).to.equal('01/02/15 1:29:6 pm');
        });

        it('Should format date to string with localization', function () {
            var date = new Date(2015, 1, 4, 13, 29, 6);
            expect(dt.format(date, 'DDDD, DD MMMM')).to.equal('Wednesday, 04 February');
            expect(dt.format(date, 'DDD, DD MMM')).to.equal('Wed, 04 Feb.');

            var ru = {
                months: {
                    shorts: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    longs: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
                },
                days: {
                    shorts: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    longs: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
                }
            };

            expect(dt.format(date, 'DDDD, DD MMMM', ru)).to.equal('Среда, 04 Февраль');
            expect(dt.format(date, 'DDD, DD MMM', ru)).to.equal('Ср, 04 Фев');
        });
    });
});