'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} target The string to search.
 * @param {string} sub The substring.
 * @returns {number} Return the count.
 *
 * @example
 *
 * count('Hello, World!', 'l');
 * // => 1
 *
 * count(99999, 9);
 * // => 5
 *
 * count(99999, 99);
 * // => 4
 */
function count(target, sub) {
    target = (0, _stringify2.default)(target);
    sub = (0, _stringify2.default)(sub);

    if (target.length === 0) {
        return 0;
    }

    if (!sub.length) {
        throw new RangeError('Search stringify must not be empty!');
    }

    var counter = 0;
    var pos = target.indexOf(sub);

    while (pos >= 0) {
        counter += 1;
        pos = target.indexOf(sub, pos + 1);
    }

    return counter;
}

exports.default = count;