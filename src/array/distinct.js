/**
 * Returns distinct elements from an array
 *
 * @param {Array} target
 * @param {Function} getter Optional. A function to apply before comparing elements.
 * @returns {Array} Returns new array with unique values.
 *
 * @example
 *
 * distinct([1, 2, 1, 3, 1, 4]);
 * // => [1, 2, 3, 4]
 *
 * distinct([{name: 'Casper'}, {name: 'Richard'}, {name: 'Casper'}], i => i.name);
 * // => [{name: 'Casper'}, {name: 'Richard'}]
 */

import contains from './contains'

function distinct(target, getter = null) {
    let result = [];
    let seen = [];

    for (let i = 0; i < target.length; i++) {
        let value = target[i];
        let comparable = getter ? getter(value) : value;

        if (!contains(seen, comparable)) {
            result.push(value);
            seen.push(comparable);
        }
    }

    return result;
}

export default distinct;
