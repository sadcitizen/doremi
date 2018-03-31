import type from '../../common/type';

/**
 * @param {*} target
 * @returns {boolean}
 */
export default target => type(target) === 'number';
