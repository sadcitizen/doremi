import getValue from '.';

describe('object/getValue()', () => {
    const target = {
        lorem: {
            ipsum: {
                dolor: 'amet'
            }
        }
    };

    test('Get value with not nested path', () => {
        expect(getValue(target, 'lorem')).toEqual({ ipsum: { dolor: 'amet' } });
    });

    test('Get value with nested path', () => {
        expect(getValue(target, 'lorem.ipsum')).toEqual({ dolor: 'amet' });
        expect(getValue(target, 'lorem.ipsum.dolor')).toBe('amet');
    });

    test('Get value if nested property is not exists', () => {
        expect(getValue(target, 'lorem.ipsum.amet')).toBeUndefined();
    });

    test('Get default value if nested property is not exists', () => {
        expect(getValue(target, 'lorem.ipsum.amet', 'sit')).toBe('sit');
    });
});
