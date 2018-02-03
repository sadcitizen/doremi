import partition from '.';

describe('array/partition()', () => {
    const target = [5, -5, 4, -4, 3, -3, 2, -2, 1, -1];

    test('Splits the array by sign', () => {
        const [positiveValues, negativeValues] = partition(target, x => x > 0);

        expect(positiveValues).toEqual([5, 4, 3, 2, 1]);
        expect(negativeValues).toEqual([-5, -4, -3, -2, -1]);
    });

    test('Uses "identity" as default predicate', () => {
        const [trues, falses] = partition([true, false, true, true, false]);

        expect(trues).toEqual([true, true, true]);
        expect(falses).toEqual([false, false]);
    });
});
