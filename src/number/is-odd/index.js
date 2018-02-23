import isNumber from '../is-number';

/**
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 */
export default target => isNumber(target) && target % 2 !== 0;
