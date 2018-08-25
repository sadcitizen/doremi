import type from '../type';

/**
 * @param {*} target
 * @returns {boolean}
 */
export default target => type(target) === 'number';
