'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Truncates `target` if it is longer than the given maximum stringify length.
 *
 * @param {string} target The stringify to truncate.
 * @param {number} limit The maximum stringify length.
 * @param {string} sfx The stringify to indicate text is omitted. Defaults is '...'.
 * @param {boolean} safe If it should not break words. Default is false.
 * @returns {string} Returns the truncated stringify.
 *
 * @example
 * truncate('lorem ipsum dolor sit amet', 10);
 * // => 'lorem i...'
 *
 * truncate('lorem ipsum dolor sit amet', 10, null, true);
 * // => 'lorem...'
 */
function truncate(target, limit, sfx, safe) {
    target = (0, _trim2.default)(target);
    sfx = sfx || '...';
    limit |= 0;
    limit = safe ? limit + 1 : limit;

    if (target <= limit) {
        return target;
    }

    target = target.substring(0, limit - sfx.length);
    target = safe ? target.substr(0, target.lastIndexOf(' ')) : (0, _trim2.default)(target);

    return target + sfx;
}

exports.default = truncate;