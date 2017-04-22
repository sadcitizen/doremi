import { expect } from 'chai';
import doremi, { array, common, date, func, logic, number, object, random, string } from '.';

describe('doremi', () => {
    it('Imports doremi as object', () => {
        expect(doremi).to.be.an('object');
    });

    it('Doremi has correct properies', () => {
        expect(doremi.array).to.equal(array);
        expect(doremi.common).to.equal(common);
        expect(doremi.date).to.equal(date);
        expect(doremi.func).to.equal(func);
        expect(doremi.logic).to.equal(logic);
        expect(doremi.number).to.equal(number);
        expect(doremi.object).to.equal(object);
        expect(doremi.random).to.equal(random);
        expect(doremi.string).to.equal(string);
    });
});
