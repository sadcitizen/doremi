import mockDate from 'mockdate';
import today from '.';

describe('date/today()', () => {
    test('returns the date that is today', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(today()).toEqual(new Date(2015, 2, 23));

        mockDate.reset();
    });
});
