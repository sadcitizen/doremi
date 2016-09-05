"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Generates a pseudo-random boolean value.
 * @returns {boolean} Returns the boolean value.
 *
 * @example
 *
 * bool();
 * // => true
 *
 * bool();
 * // => false
 */

exports.default = function () {
  return Math.random() < 0.5;
};