import { expect } from 'chai';
import object, { getValue, isObject, isPlain, namespace, setValue } from '.';

describe('doremi/object', () => {
    it('Imports doremi/object as object', () => {
        expect(object).to.be.an('object');
    });

    it('doremi/object has correct properies', () => {
        expect(object.getValue).to.equal(getValue);
        expect(object.isObject).to.equal(isObject);
        expect(object.isPlain).to.equal(isPlain);
        expect(object.namespace).to.equal(namespace);
        expect(object.setValue).to.equal(setValue);
    });
});
