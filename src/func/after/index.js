import { UNDEF } from '../../internal/constants';

/**
 * @param {Function} fn
 * @param {number} times
 * @return {Function}
 */
export default (fn, times) => (...args) => {
    /* eslint-disable no-param-reassign */
    /* eslint-disable no-plusplus */
    if (--times < 1) {
        return fn(...args);
    }

    /* eslint-enable no-plusplus */
    /* eslint-enable no-param-reassign */
    return UNDEF;
};
