'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRound = require('../internal/baseRound');

var _baseRound2 = _interopRequireDefault(_baseRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates number rounded up to precision.
 *
 * @param {number} num The number to round up.
 * @param {number} precision The precision to round up to.
 * @returns {number} Returns the rounded up number.
 *
 * @example
 *
 * ceil(42.42);
 * // => 43
 *
 * ceil(5.4321, 2);
 * // => 5.44
 */
exports.default = (0, _baseRound2.default)('ceil');