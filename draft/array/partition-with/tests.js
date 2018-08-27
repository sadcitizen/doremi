import partitionWith from '.';

describe('array/partitionWith()', () => {
    const target = [5, -5, 4, -4, 3, -3, 2, -2, 1, -1];

    test('splits the array by sign', () => {
        const [positiveValues, negativeValues] = partitionWith(target, x => x > 0);

        expect(positiveValues).toEqual([5, 4, 3, 2, 1]);
        expect(negativeValues).toEqual([-5, -4, -3, -2, -1]);
    });

    test('uses "identity" as default predicate', () => {
        const [trues, falses] = partitionWith([true, false, true, true, false]);

        expect(trues).toEqual([true, true, true]);
        expect(falses).toEqual([false, false]);
    });
});
