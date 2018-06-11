import getValue from '../../object/get-value';

/**
 * @param {Array} array
 * @param {string} path
 * @param {*} [defaultValue]
 * @returns {*}
 */
export default (array, path, defaultValue) => array.map(item => getValue(item, path, defaultValue));
