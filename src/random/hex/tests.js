import hex from '.';

describe('random/hex()', () => {
    let hexed,
        hex12;

    beforeAll(() => {
        hexed = hex();
        hex12 = hex(12);
    });

    test('returns a string', () => {
        expect(hexed).toEqual(expect.any(String));
        expect(hex12).toEqual(expect.any(String));

        expect(hexed.length).toBe(1);
        expect(hex12.length).toBe(12);
    });

    test('Hex should be a hex', () => {
        expect(hexed).toMatch(/[a-f0-9]+/);
        expect(hex12).toMatch(/[a-f0-9]+/);
    });
});
