import partial from '../../func/partial';
import equals from '../../logic/equals';
import includesWith from '../includes-with';

/**
 * @param {Array} array
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array}
 */
export default function (array, comparator = equals) {
    const result = [];
    let predicate;

    array.forEach(value => {
        predicate = partial(comparator, value);

        if (!includesWith(result, predicate)) {
            result.push(value);
        }
    });

    return result;
}
