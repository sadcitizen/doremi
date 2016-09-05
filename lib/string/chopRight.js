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
 * @param {string|*} target The stringify to chopping.
 * @param {number} step The length of piece.
 * @returns {Array} The array of pieces.
 *
 * @example
 * chopRight('lorem ipsum', 5);
 * // => ['l', 'orem ', 'ipsum']
 *
 * chopRight(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chopRight(target, step) {
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

    for (i = length; i >= 0; i -= step) {
        result.unshift(target.slice(i - step < 0 ? 0 : i - step, i));
    }

    return result;
}

exports.default = chopRight;