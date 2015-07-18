'use strict';

import chai from 'chai';
import choice from '../../src/random/choice';

const expect = chai.expect;

describe('random/choice()', () => {
    let list = [1, 2, 3],
        random = Math.random(),
        firstChoice,
        secondChoice,
        firstApplyChoice,
        secondApplyChoice;

    before(() => {
        firstChoice = choice(list);
        secondChoice = choice(list);

        firstApplyChoice = choice.apply(random, list);
        secondApplyChoice = choice.apply(random, list);
    });

    it('Should pick a random item from list', () => {
        expect(list).to.contain(firstChoice);
        expect(list).to.contain(secondChoice);
    });

    it('Should pick a random item from arguments', () => {
        expect(list).to.contain(firstApplyChoice);
        expect(list).to.contain(secondApplyChoice);
    });
});