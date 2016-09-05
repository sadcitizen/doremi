'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRound = require('../internal/baseRound');

var _baseRound2 = _interopRequireDefault(_baseRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates number rounded down to precision.
 *
 * @param {number} num The number to round down.
 * @param {number} precision The precision to round down to.
 * @returns {number} Returns the rounded down number.
 *
 * @example
 *
 * floor(42.42);
 * // => 42
 *
 * floor(5.4321, 2);
 * // => 5.43
 */
exports.default = (0, _baseRound2.default)('floor');