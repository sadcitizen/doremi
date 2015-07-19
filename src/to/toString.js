import isExists from '../is/isExists';

/**
 *
 * @param {*} target
 * @returns {String}
 */
export default target => !isExists(target) ? '' : target.toString();