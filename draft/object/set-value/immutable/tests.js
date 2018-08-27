import setValue from '.';

describe('object/setValue/immutable()', () => {
    test('sets value with not nested path', () => {
        const target = {};

        const result = setValue(target, 'lorem', 'ipsum');
        // setValue(target, 'dolor', 'sit');

        // expect(result).toEqual({ lorem: 'ipsum' });
        expect(result).not.toBe(target);
        // expect(target).toEqual({ lorem: 'ipsum', dolor: 'sit' });
    });

    // test('sets value with nested path', () => {
    //     const target = {};
    //
    //     setValue(target, 'lorem.ipsum.dolor', 'sit');
    //
    //     expect(target).toEqual({ lorem: { ipsum: { dolor: 'sit' } } });
    // });
    //
    // test('sets value if nested property is exists', () => {
    //     const target = { lorem: { ipsum: { dolor: 'amet' } } };
    //
    //     setValue(target, 'lorem.ipsum.dolor', 'sit');
    //
    //     expect(target).toEqual({ lorem: { ipsum: { dolor: 'sit' } } });
    // });
});
