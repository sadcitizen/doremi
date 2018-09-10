import mockDate from 'mockdate';
import tomorrow from '.';

describe('date/tomorrow()', () => {
    test('returns the date that is tomorrow', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(tomorrow()).toEqual(new Date(2015, 2, 24));

        mockDate.reset();
    });
});
