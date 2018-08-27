import getValue from '.';

describe('object/getValue()', () => {
    const target = {
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
        expect(getValue(target, 'f')).toEqual({ g: 'h' });
    });

    test('gets value by nested path', () => {
        expect(getValue(target, 'a.b')).toEqual({ c: 'd' });
        expect(getValue(target, 'a.b.c')).toBe('d');
    });

    test('gets value of non-existent property', () => {
        expect(getValue(target, 'o')).toBeUndefined();
        expect(getValue(target, 'f.p')).toBeUndefined();
    });

    test('gets value of non-existent property with default value', () => {
        expect(getValue(target, 'o', 'q')).toBe('q');
        expect(getValue(target, 'f.p', 's')).toBe('s');
    });

    test('works with nested arrays', () => {
        expect(getValue(target, 'i.0')).toBe('j');
        expect(getValue(target, 'i.3')).toEqual({ m: 'n', o: { p: 'q' } });
        expect(getValue(target, 'i.3.m')).toBe('n');
        expect(getValue(target, 'i.3.o')).toEqual({ p: 'q' });
    });
});
