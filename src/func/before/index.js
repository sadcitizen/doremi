/**
 * @param {Function} fn
 * @param {number} times
 * @return {Function}
 */
export default function (fn, times) {
    let result;

    return function (...args) {
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-plusplus */
        if (--times > 0) {
            result = fn(...args);
        } else {
            fn = null;
        }

        return result;
        /* eslint-enable no-plusplus */
        /* eslint-enable no-param-reassign */
    };
}
