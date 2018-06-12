import partial from '../../func/partial';
import equals from '../../logic/equals';
import includesWith from '../includes-with';

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparator]
 * @returns {*[]}
 */
export default function (array, other, comparator = equals) {
    let predicate;

    return array.filter(value => {
        predicate = partial(comparator, value);

        return !includesWith(other, predicate);
    });
}
