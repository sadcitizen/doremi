import guid from '.';

describe('random/guid()', () => {
    test('guid should be guid', () => {
        expect(guid()).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
    });

    test('guid should be unique', () => {
        const firstGuid = guid();
        const secondGuid = guid();

        expect(firstGuid).not.toEqual(secondGuid);
    });
});
