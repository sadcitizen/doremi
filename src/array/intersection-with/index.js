import equals from '../../logic/equals';
import includesWith from '../includes-with';
import partial from '../../func/partial';

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparator]
 * @returns {*[]}
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
