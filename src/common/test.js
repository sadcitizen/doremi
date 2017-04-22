import { expect } from 'chai';
import common, { isDefined, type } from '.';

describe('doremi/common', () => {
    it('Imports doremi/common as object', () => {
        expect(common).to.be.an('object');
    });

    it('doremi/common has correct properies', () => {
        expect(common.isDefined).to.equal(isDefined);
        expect(common.type).to.equal(type);
    });
});
