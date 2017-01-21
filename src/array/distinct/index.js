import identity from '../../func/identity';

/**
 * Returns distinct elements from an array
 *
 * @param {Array} target
 * @param {Function} iteratee Optional. A function to apply before comparing elements.
 * @returns {Array} Returns new array with unique values.
 *
 * @example
 * distinct([1, 2, 1, 3, 1, 4]);
 * // => [1, 2, 3, 4]
 *
 * distinct([{name: 'Casper'}, {name: 'Richard'}, {name: 'Casper'}], i => i.name);
 * // => [{name: 'Casper'}, {name: 'Richard'}]
 */
export default function (target, iteratee = identity) {
    let result = [];
    let seen = [];

    target.forEach(value => {
        let comparable = iteratee(value);

        if (!seen.includes(comparable)) {
            result.push(value);
            seen.push(comparable);
        }
    });

    return result;
}
