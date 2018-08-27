import isDefined from '../../common/is-defined';

/**
 * @param {Array} array
 * @returns {Array}
 */
export default array => array.filter(isDefined);
