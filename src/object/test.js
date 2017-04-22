import { expect } from 'chai';
import object, { getValue, invert, isObject, isPlain, namespace, pairs, property, result, setValue, template, values } from '.';

describe('doremi/object', () => {
    it('Imports doremi/object as object', () => {
        expect(object).to.be.an('object');
    });

    it('doremi/object has correct properies', () => {
        expect(object.getValue).to.equal(getValue);
        expect(object.invert).to.equal(invert);
        expect(object.isObject).to.equal(isObject);
        expect(object.isPlain).to.equal(isPlain);
        expect(object.namespace).to.equal(namespace);
        expect(object.pairs).to.equal(pairs);
        expect(object.property).to.equal(property);
        expect(object.result).to.equal(result);
        expect(object.setValue).to.equal(setValue);
        expect(object.template).to.equal(template);
        expect(object.values).to.equal(values);
    });
});
