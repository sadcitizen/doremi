"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a function that returns `value`.
 *
 * @param target The value to return.
 * @returns {Function} Returns new function.
 *
 * @example
 *
 * var num = toConstant(42);
 * num();
 * // => 42
 *
 * var str = toConstant('value');
 * str();
 * // => 'value'
 */
function toConstant(target) {
  return function () {
    return target;
  };
}

exports.default = toConstant;