import setValue from '.';

describe('object/setValue()', () => {
    test('Set value with not nested path', () => {
        const target = {};
        setValue(target, 'lorem', 'ipsum');
        setValue(target, 'dolor', 'sit');

        expect(target).toEqual({ lorem: 'ipsum', dolor: 'sit' });
    });

    test('Set value with nested path', () => {
        const target = {};
        setValue(target, 'lorem.ipsum.dolor', 'sit');

        expect(target).toEqual({ lorem: { ipsum: { dolor: 'sit' } } });
    });

    test('Set value if nested property is exists', () => {
        const target = { lorem: { ipsum: { dolor: 'amet' } } };
        setValue(target, 'lorem.ipsum.dolor', 'sit');

        expect(target).toEqual({ lorem: { ipsum: { dolor: 'sit' } } });
    });
});
