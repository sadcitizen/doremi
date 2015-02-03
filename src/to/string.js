import exists from '../is/exists';

/**
 *
 * @param {*} target
 * @returns {String}
 */
function string(target) {
    return !exists(target) ? '' : target.toString();
}

export default string;