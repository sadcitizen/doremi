import getValue from '.';

describe('object/getValue()', () => {
    const source = {
        a: {
            b: {
                c: 'd'
            },
            d: 'e'
        },
        f: {
            g: 'h'
        },
        i: ['j', 'k', 'l', { m: 'n', o: { p: 'q' } }]
    };

    test('gets value by property', () => {
        expect(getValue(source, ['f'])).toEqual({ g: 'h' });
    });

    test('gets value by nested path', () => {
        expect(getValue(source, ['a', 'b'])).toEqual({ c: 'd' });
        expect(getValue(source, ['a', 'b', 'c'])).toBe('d');
    });

    test('gets value of non-existent property', () => {
        expect(getValue(source, ['o'])).toBeUndefined();
        expect(getValue(source, ['f', 'p'])).toBeUndefined();
    });

    test('gets value of non-existent property with default value', () => {
        expect(getValue(source, ['o'], 'q')).toBe('q');
        expect(getValue(source, ['f', 'p'], 's')).toBe('s');
    });

    test('works with nested arrays', () => {
        expect(getValue(source, ['i', 0])).toBe('j');
        expect(getValue(source, ['i', 3])).toEqual({ m: 'n', o: { p: 'q' } });
        expect(getValue(source, ['i', 3, 'm'])).toBe('n');
        expect(getValue(source, ['i', 3, 'o'])).toEqual({ p: 'q' });
    });
});
