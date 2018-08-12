import format from '.';

describe('number/format()', () => {
    test('todo', () => {
        expect(format(12345.6789, { precision: 3, groupSeparator: ' ', decimalSeparator: ',' })).toBe('12 345,678');
        expect(format(12345.6, { precision: 3, groupSeparator: ' ', decimalSeparator: ',', skipTrailingZeros: false })).toBe('12 345,600');
    });
});
