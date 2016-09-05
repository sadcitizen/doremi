"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Checks if an array contains a given value.
 *
 * @param {Array} target The array to checks.
 * @param {*} value The value.
 * @param {number} [start] The index to start search. Optional.
 * @returns {boolean} Returns `true` if the array contains the given value, else 'false'.
 *
 * @example
 *
 * contains([1, 2, 3], 3);
 * // => true
 *
 * contains([1, 3, 5], 2);
 * // => false
 */

exports.default = function (target, value, start) {
  return target.indexOf(value, start) !== -1;
};