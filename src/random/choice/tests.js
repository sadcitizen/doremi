import choice from '.';

describe('random/choice()', () => {
    let list = [1, 2, 3],
        random = Math.random(),
        firstChoice,
        secondChoice,
        firstApplyChoice,
        secondApplyChoice;

    beforeAll(() => {
        firstChoice = choice(list);
        secondChoice = choice(list);

        firstApplyChoice = choice.apply(random, list);
        secondApplyChoice = choice.apply(random, list);
    });

    test('Picks a random item from list', () => {
        expect(list).toContain(firstChoice);
        expect(list).toContain(secondChoice);
    });

    test('Picks a random item from arguments', () => {
        expect(list).toContain(firstApplyChoice);
        expect(list).toContain(secondApplyChoice);
    });
});
