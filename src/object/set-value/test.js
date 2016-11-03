import { expect } from 'chai';
import setValue from '.';

describe('object/setValue()', () => {
    it('Set value with not nested path', () => {
        const target = {};
        setValue(target, 'lorem', 'ipsum');
        setValue(target, 'dolor', 'sit');

        expect(target).to.deep.equal({ lorem: 'ipsum', dolor: 'sit' });
    });

    it('Set value with nested path', () => {
        const target = {};
        setValue(target, 'lorem.ipsum.dolor', 'sit');

        expect(target).to.deep.equal({ lorem: { ipsum: { dolor: 'sit' } } });
    });

    it('Set value if nested property is exists', () => {
        const target = { lorem: { ipsum: { dolor: 'amet' } } };
        setValue(target, 'lorem.ipsum.dolor', 'sit');

        expect(target).to.deep.equal({ lorem: { ipsum: { dolor: 'sit' } } });
    });
});
