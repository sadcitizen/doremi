import mockDate from 'mockdate';
import yesterday from '.';

describe('date/yesterday()', () => {
    test('returns the date that is yesterday', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(yesterday()).toEqual(new Date(2015, 2, 22));

        mockDate.reset();
    });
});
