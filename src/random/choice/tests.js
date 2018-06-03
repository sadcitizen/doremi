import choice from '.';

describe('random/choice()', () => {
    const list = [1, 2, 3];
    const random = Math.random();
    let firstChoice;
    let secondChoice;
    let firstApplyChoice;
    let secondApplyChoice;

    beforeAll(() => {
        firstChoice = choice(list);
        secondChoice = choice(list);

        firstApplyChoice = choice.apply(random, list);
        secondApplyChoice = choice.apply(random, list);
    });

    test('picks a random item from list', () => {
        expect(list).toContain(firstChoice);
        expect(list).toContain(secondChoice);
    });

    test('picks a random item from arguments', () => {
        expect(list).toContain(firstApplyChoice);
        expect(list).toContain(secondApplyChoice);
    });
});
