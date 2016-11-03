import { expect } from 'chai';
import getValue from '.';

describe('object/getValue()', () => {
    const target = {
        lorem: {
            ipsum: {
                dolor: 'amet'
            }
        }
    };

    it('Get value with not nested path', () => {
        expect(getValue(target, 'lorem')).to.deep.equal({ ipsum: { dolor: 'amet' } });
    });

    it('Get value with nested path', () => {
        expect(getValue(target, 'lorem.ipsum')).to.deep.equal({ dolor: 'amet' });
        expect(getValue(target, 'lorem.ipsum.dolor')).to.equal('amet');
    });

    it('Get value if nested property is not exists', () => {
        expect(getValue(target, 'lorem.ipsum.amet')).to.be.undefined;
    });

    it('Get default value if nested property is not exists', () => {
        expect(getValue(target, 'lorem.ipsum.amet', 'sit')).to.equal('sit');
    });
});
