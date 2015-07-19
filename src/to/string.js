import exists from '../is/isExists';

/**
 *
 * @param {*} target
 * @returns {String}
 */
function string(target) {
    return !exists(target) ? '' : target.toString();
}

export default string;