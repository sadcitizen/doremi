import regExp, {
    escape
} from '.';

describe('doremi/regExp', () => {
    test('imports doremi/regExp as object', () => {
        expect(regExp).toEqual(expect.any(Object));
    });

    test('doremi/regExp has correct properties', () => {
        expect(regExp).toHaveProperty('escape', escape);
    });
});
