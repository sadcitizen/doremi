import isNumber from '../is-number';

/**
 * @param {*} target The value to check.
 * @returns {boolean} Return true if target is an even number, else false.
 */
export default target => isNumber(target) && target % 2 === 0;
