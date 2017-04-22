import { expect } from 'chai';
import namespace from '.';

describe('object/namespace()', () => {
    it('Create nested properties', () => {
        const target = {};
        namespace(target, 'lorem.ipsum.dolor');

        expect(target).to.deep.equal({ lorem: { ipsum: { dolor: {} } } });
    });

    it('Reuse existing nested properties', () => {
        const target = { foo: 'bar' };
        namespace(target, 'baz.quux');

        expect(target).to.deep.equal({ foo: 'bar', baz: { quux: {} } });
    });

    it('Return original object if no path', () => {
        const target = { foo: 'bar' };
        expect(namespace(target)).to.deep.equal({ foo: 'bar' });
        expect(namespace(target)).to.equal(target);
    });

    it('Do not overwrite existing nested properties', () => {
        const target = { foo: { bar: { baz: {}} } };
        namespace(target, 'foo.bar.quux');

        expect(target).to.deep.equal({ foo: { bar: { baz: {}, quux: {} } } });
    });
});
