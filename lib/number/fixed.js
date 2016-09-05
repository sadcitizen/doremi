'use strict';

/**
 * Formats a number using fixed-point notation (like Number.toFixed(), but without rounding).
 *
 * @param {number} target The number to format.
 * @param {number} precision The precision to format to.
 * @returns {string} Returns the formatted number.
 *
 * @example
 *
 * fixed(12.345);
 * // => '12.34'
 *
 * (12.345).toFixed(2);
 * // => '12.35'
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
  return target.toFixed(precision + 1).slice(0, -1);
};