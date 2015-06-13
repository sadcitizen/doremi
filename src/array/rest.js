import slice from '../internal/slice';

// TODO: add description

/**
 *
 * @param target
 * @param at
 * @returns {Array}
 */
function rest(target, at) {
    return slice(target, (at |= 0) < 1 ? 1 : at);
}

export default rest;