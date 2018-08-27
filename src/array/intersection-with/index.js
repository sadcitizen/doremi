import equals from '../../logic/equals';
import includesWith from '../includes-with';
import partial from '../../func/partial';

/**
 * @param {Array} array The first array to inspect.
 * @param {Array} other The second array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {*[]} Returns the new array of intersecting elements.
 */
export default function (array, other, comparator = equals) {
    const result = [];
    let predicate;

    array.forEach(value => {
        predicate = partial(comparator, value);

        if (includesWith(other, predicate)) {
            result.push(value);
        }
    });

    return result;
}
