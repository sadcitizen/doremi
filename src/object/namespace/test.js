import { expect } from 'chai';
import namespace from '.';

describe('object/namespace()', () => {
    it('Create nested properties', () => {
        expect(namespace({}, 'lorem.ipsum.dolor')).to.deep.equal({ lorem: { ipsum: { dolor: {} } } });
    });

    it('Reuse existing nested properties', () => {
        expect(namespace({ foo: 'bar' }, 'baz.quux')).to.deep.equal({ foo: 'bar', baz: { quux: {} } });
    });

    it('Return original object if no path', () => {
        const target = { foo: 'bar' };
        expect(namespace(target)).to.deep.equal({ foo: 'bar' });
        expect(namespace(target)).to.equal(target);
    });

    it('Do not overwrite existing nested properties', () => {
        const target = { foo: { bar: { baz: {}} } };
        expect(namespace(target, 'foo.bar.quux')).to.deep.equal({ foo: { bar: { baz: {}, quux: {} } } });
    });
});
