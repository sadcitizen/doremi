'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Chops the stringify into pieces with length equal `step`.
 *
 * @param {string} target The stringify to chopping.
 * @param {number} [step] The length of piece. Optional.
 * @returns {Array} The array of pieces.
 *
 * @example
 * chop('lorem ipsum', 5);
 * // => ['lorem', ' ipsu', 'm']
 *
 * chop(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chop(target, step) {
    var result = [];
    var i = void 0;
    var length = void 0;

    step = step | 0;
    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return [];
    }

    if (step < 2) {
        return target.split('');
    }

    length = target.length;

    for (i = 0; i < length; i += step) {
        result.push(target.slice(i, i + step));
    }

    return result;
}

exports.default = chop;