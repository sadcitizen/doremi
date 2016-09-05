'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRound = require('../internal/baseRound');

var _baseRound2 = _interopRequireDefault(_baseRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates number rounded to precision.
 *
 * @param {number} num The number to round.
 * @param {number} precision The precision to round to.
 * @returns {number} Returns the rounded number.
 *
 * @example
 *
 * round(42.52);
 * // => 43
 *
 * round(5.4321, 2);
 * // => 5.43
 */
exports.default = (0, _baseRound2.default)('round');