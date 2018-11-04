import doremi, {
    array,
    common,
    date,
    func,
    logic,
    math,
    number,
    object,
    random,
    regExp,
    string
} from '.';

describe('doremi', () => {
    test('imports doremi as object', () => {
        expect(doremi).toEqual(expect.any(Object));
    });

    test('doremi has correct properties', () => {
        expect(doremi).toHaveProperty('array', array);
        expect(doremi).toHaveProperty('common', common);
        expect(doremi).toHaveProperty('date', date);
        expect(doremi).toHaveProperty('func', func);
        expect(doremi).toHaveProperty('logic', logic);
        expect(doremi).toHaveProperty('math', math);
        expect(doremi).toHaveProperty('number', number);
        expect(doremi).toHaveProperty('object', object);
        expect(doremi).toHaveProperty('random', random);
        expect(doremi).toHaveProperty('regExp', regExp);
        expect(doremi).toHaveProperty('string', string);
    });
});
