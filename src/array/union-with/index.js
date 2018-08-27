import equals from '../../logic/equals';
import uniqueWith from '../unique-with';

/**
 * @category array
 * @param {Array} array The first array to unite.
 * @param {Array} other The second array to unite.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {*[]} Returns the new array of united elements.
 */
export default function (array, other, comparator = equals) {
    return uniqueWith([...array, ...other], comparator);
}
