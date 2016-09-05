"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Checks if `target` is null.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is null, else `false`.
 *
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull('');
 * // => false
 */
exports.default = function (target) {
  return target === null;
};