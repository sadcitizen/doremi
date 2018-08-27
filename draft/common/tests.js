import common, {
    isBoolean,
    isDate,
    isDefined,
    isFunction,
    isNumber,
    isObject,
    isString
} from '.';

describe('doremi/common', () => {
    test('imports doremi/common as object', () => {
        expect(common).toEqual(expect.any(Object));
    });

    test('doremi/common has correct properties', () => {
        expect(common).toHaveProperty('isBoolean', isBoolean);
        expect(common).toHaveProperty('isDate', isDate);
        expect(common).toHaveProperty('isDefined', isDefined);
        expect(common).toHaveProperty('isFunction', isFunction);
        expect(common).toHaveProperty('isNumber', isNumber);
        expect(common).toHaveProperty('isObject', isObject);
        expect(common).toHaveProperty('isString', isString);
    });
});
