'use strict';

import chai from 'chai';
import format from '../../src/date/format';

const expect = chai.expect;

describe('datetime/format()', () => {
    it('Should format year to string', () => {
        const first = new Date(2015, 1, 1);
        const second = new Date(909, 1, 1);

        expect(format(first, 'YYYY')).to.equal('2015');
        expect(format(first, 'YYY')).to.equal('2015');
        expect(format(first, 'YY')).to.equal('15');
        expect(format(first, 'Y')).to.equal('15');

        expect(format(second, 'YYYY')).to.equal('0909');
        expect(format(second, 'YYY')).to.equal('909');
        expect(format(second, 'YY')).to.equal('09');
        expect(format(second, 'Y')).to.equal('9');
    });

    it('Should format month to string', () => {
        const first = new Date(2015, 0, 1);
        const second = new Date(2015, 11, 1);

        expect(format(first, 'MMMM')).to.equal('January');
        expect(format(first, 'MMM')).to.equal('Jan.');
        expect(format(first, 'MM')).to.equal('01');
        expect(format(first, 'M')).to.equal('1');

        expect(format(second, 'MMMM')).to.equal('December');
        expect(format(second, 'MMM')).to.equal('Dec.');
        expect(format(second, 'MM')).to.equal('12');
        expect(format(second, 'M')).to.equal('12');
    });

    it('Should format days to string', () => {
        const first = new Date(2015, 0, 1);
        const second = new Date(2015, 0, 20);

        expect(format(first, 'DD')).to.equal('01');
        expect(format(first, 'D')).to.equal('1');

        expect(format(second, 'DD')).to.equal('20');
        expect(format(second, 'D')).to.equal('20');
    });

    it('Should format weekday to string', () => {
        const monday = new Date(2015, 0, 5);
        const tuesday = new Date(2015, 0, 6);
        const wednesday = new Date(2015, 0, 7);
        const thursday = new Date(2015, 0, 8);
        const friday = new Date(2015, 0, 9);
        const saturday = new Date(2015, 0, 10);
        const sunday = new Date(2015, 0, 11);

        expect(format(monday, 'DDDD')).to.equal('Monday');
        expect(format(monday, 'DDD')).to.equal('Mon');

        expect(format(tuesday, 'DDDD')).to.equal('Tuesday');
        expect(format(tuesday, 'DDD')).to.equal('Tue');

        expect(format(wednesday, 'DDDD')).to.equal('Wednesday');
        expect(format(wednesday, 'DDD')).to.equal('Wed');

        expect(format(thursday, 'DDDD')).to.equal('Thursday');
        expect(format(thursday, 'DDD')).to.equal('Thu');

        expect(format(friday, 'DDDD')).to.equal('Friday');
        expect(format(friday, 'DDD')).to.equal('Fri');

        expect(format(saturday, 'DDDD')).to.equal('Saturday');
        expect(format(saturday, 'DDD')).to.equal('Sat');

        expect(format(sunday, 'DDDD')).to.equal('Sunday');
        expect(format(sunday, 'DDD')).to.equal('Sun');
    });

    it('Should format hours to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 11, 9, 6);
        const third = new Date(2015, 1, 1, 22, 0, 0);

        expect(format(first, 'HH')).to.equal('00');
        expect(format(first, 'H')).to.equal('0');

        expect(format(first, 'hh')).to.equal('00');
        expect(format(first, 'h')).to.equal('0');

        expect(format(second, 'HH')).to.equal('11');
        expect(format(second, 'H')).to.equal('11');

        expect(format(second, 'hh')).to.equal('11');
        expect(format(second, 'h')).to.equal('11');

        expect(format(third, 'HH')).to.equal('22');
        expect(format(third, 'H')).to.equal('22');

        expect(format(third, 'hh')).to.equal('10');
        expect(format(third, 'h')).to.equal('10');
    });

    it('Should format minutes to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 0, 9, 6);
        const third = new Date(2015, 1, 1, 0, 0, 0);

        expect(format(first, 'mm')).to.equal('45');
        expect(format(first, 'm')).to.equal('45');

        expect(format(second, 'mm')).to.equal('09');
        expect(format(second, 'm')).to.equal('9');

        expect(format(third, 'mm')).to.equal('00');
        expect(format(third, 'm')).to.equal('0');
    });

    it('Should format seconds to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 0, 9, 6);
        const third = new Date(2015, 1, 1, 0, 0, 0);

        expect(format(first, 'ss')).to.equal('29');
        expect(format(first, 's')).to.equal('29');

        expect(format(second, 'ss')).to.equal('06');
        expect(format(second, 's')).to.equal('6');

        expect(format(third, 'ss')).to.equal('00');
        expect(format(third, 's')).to.equal('0');
    });

    it('Should format milliseconds to string', () => {
        const first = new Date(2015, 1, 1, 1, 1, 1, 1);
        const second = new Date(2015, 1, 1, 1, 1, 1, 10);
        const third = new Date(2015, 1, 1, 1, 1, 1, 100);

        expect(format(first, 'fff')).to.equal('001');
        expect(format(first, 'ff')).to.equal('00');
        expect(format(first, 'f')).to.equal('0');

        expect(format(second, 'fff')).to.equal('010');
        expect(format(second, 'ff')).to.equal('01');
        expect(format(second, 'f')).to.equal('0');

        expect(format(third, 'fff')).to.equal('100');
        expect(format(third, 'ff')).to.equal('10');
        expect(format(third, 'f')).to.equal('1');
    });

    it('Should format am/pm to string', () => {
        const first = new Date(2015, 1, 1, 0, 45, 29);
        const second = new Date(2015, 1, 1, 11, 9, 6);
        const third = new Date(2015, 1, 1, 22, 0, 0);

        expect(format(first, 'TT')).to.equal('AM');
        expect(format(first, 'tt')).to.equal('am');

        expect(format(second, 'TT')).to.equal('AM');
        expect(format(second, 'tt')).to.equal('am');

        expect(format(third, 'TT')).to.equal('PM');
        expect(format(third, 'tt')).to.equal('pm');
    });

    it('Should format quarter to string', () => {
        expect(format(new Date(2015, 0, 1), 'Q')).to.equal('1');
        expect(format(new Date(2015, 1, 1), 'Q')).to.equal('1');
        expect(format(new Date(2015, 2, 1), 'Q')).to.equal('1');
        expect(format(new Date(2015, 3, 1), 'Q')).to.equal('2');
        expect(format(new Date(2015, 4, 1), 'Q')).to.equal('2');
        expect(format(new Date(2015, 5, 1), 'Q')).to.equal('2');
        expect(format(new Date(2015, 6, 1), 'Q')).to.equal('3');
        expect(format(new Date(2015, 7, 1), 'Q')).to.equal('3');
        expect(format(new Date(2015, 8, 1), 'Q')).to.equal('3');
        expect(format(new Date(2015, 9, 1), 'Q')).to.equal('4');
        expect(format(new Date(2015, 10, 1), 'Q')).to.equal('4');
        expect(format(new Date(2015, 11, 1), 'Q')).to.equal('4');
    });

    it('Should format date to string', () => {
        const date = new Date(2015, 1, 1, 13, 29, 6);
        expect(format(date, 'YYYY')).to.equal('2015');
        expect(format(date, 'DD-MM-YYYY HH:mm:ss')).to.equal('01-02-2015 13:29:06');
        expect(format(date, 'DD.MM.YYYY hh:mm:ss TT')).to.equal('01.02.2015 01:29:06 PM');
        expect(format(date, 'DD/MM/YY h:m:s tt')).to.equal('01/02/15 1:29:6 pm');
    });

    it('Should format date to string with localization', () => {
        const date = new Date(2015, 1, 4, 13, 29, 6);
        expect(format(date, 'DDDD, DD MMMM')).to.equal('Wednesday, 04 February');
        expect(format(date, 'DDD, DD MMM')).to.equal('Wed, 04 Feb.');

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

        expect(format(date, 'DDDD, DD MMMM', ru)).to.equal('Среда, 04 Февраль');
        expect(format(date, 'DDD, DD MMM', ru)).to.equal('Ср, 04 Фев');
    });
});
