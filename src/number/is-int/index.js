import isNumber from '../is-number';

/**
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 */
export default target => isNumber(target) && target % 1 === 0;
