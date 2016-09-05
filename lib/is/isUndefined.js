"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Checks if `target` is undefined.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is undefined, else `false`.
 *
 * @example
 *
 * isUndefined(void 0);
 * // => true
 *
 * isUndefined('');
 * // => false
 */
exports.default = function (target) {
  return target === undefined;
};