import equals from '../../logic/equals';

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparator]
 * @returns {*[]}
 */
export default function (array, other, comparator = equals) {
    return [].concat(array, other).filter(x => !(array.includes(x) && other.includes(x)));
}
