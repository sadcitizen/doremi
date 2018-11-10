import common, {
    isBoolean,
    isDate,
    isDefined,
    isFunction,
    isMap,
    isNumber,
    isObject,
    isSet,
    isString,
    isSymbol,
    isWeakMap,
    isWeakSet
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
        expect(common).toHaveProperty('isMap', isMap);
        expect(common).toHaveProperty('isNumber', isNumber);
        expect(common).toHaveProperty('isObject', isObject);
        expect(common).toHaveProperty('isSet', isSet);
        expect(common).toHaveProperty('isString', isString);
        expect(common).toHaveProperty('isSymbol', isSymbol);
        expect(common).toHaveProperty('isWeakMap', isWeakMap);
        expect(common).toHaveProperty('isWeakSet', isWeakSet);
    });
});
