'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _integer = require('./integer');

var _integer2 = _interopRequireDefault(_integer);

var _isArray = require('../is/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {Array} list The list to choice.
 * @returns {*} Returns the pseudo-random element.
 *
 * @example
 *
 * let list = [1, 2, 3];
 * choice(list);
 * // => 2
 *
 * choice('lorem', 'ipsum', 'sit');
 * // => 'sit'
 */
function choice(list) {
    var args = arguments.length === 1 && (0, _isArray2.default)(list) ? list : arguments;

    return args[(0, _integer2.default)(0, args.length - 1)];
}

exports.default = choice;