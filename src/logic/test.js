import { expect } from 'chai';
import logic, { and, or } from '.';

describe('doremi/logic', () => {
    it('Imports doremi/logic as object', () => {
        expect(logic).to.be.an('object');
    });

    it('doremi/logic has correct properies', () => {
        expect(logic.and).to.equal(and);
        expect(logic.or).to.equal(or);
    });
});
