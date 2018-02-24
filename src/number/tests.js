import number, {
    abbreviate,
    ceil,
    clamp,
    equals,
    fixed,
    floor,
    isEven,
    isFloat,
    isInt,
    isNumber,
    isOdd,
    log,
    round,
    sign
} from '.';

describe('doremi/number', () => {
    test('imports doremi/number as object', () => {
        expect(number).toEqual(expect.any(Object));
    });

    test('doremi/number has correct properties', () => {
        expect(number).toHaveProperty('abbreviate', abbreviate);
        expect(number).toHaveProperty('ceil', ceil);
        expect(number).toHaveProperty('clamp', clamp);
        expect(number).toHaveProperty('equals', equals);
        expect(number).toHaveProperty('fixed', fixed);
        expect(number).toHaveProperty('floor', floor);
        expect(number).toHaveProperty('isEven', isEven);
        expect(number).toHaveProperty('isFloat', isFloat);
        expect(number).toHaveProperty('isInt', isInt);
        expect(number).toHaveProperty('isNumber', isNumber);
        expect(number).toHaveProperty('isOdd', isOdd);
        expect(number).toHaveProperty('log', log);
        expect(number).toHaveProperty('round', round);
        expect(number).toHaveProperty('sign', sign);
    });
});
