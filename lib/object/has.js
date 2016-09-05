'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined = require('../is/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the given property name exists as a direct or nested property of `target`.
 *
 * @param target The object to check.
 * @param key The name of property to check.
 * @returns {*} Returns `true` if `target` has property with name 'key', else `false`.
 *
 * @example
 *
 * var lorem = {
 *     lorem: {
 *         ipsum: {
 *             dolor: {
 *                 sit: 'amet'
 *             }
 *         },
 *         foo: function () {
 *             return 'bar';
 *         }
 *     },
 *     bar: 42
 * };
 *
 * has(lorem, 'bar');
 * // => true
 *
 * has(lorem, 'lorem.ipsum.dolor.sit');
 * // => true
 *
 * has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * has(lorem, 'lorem.toString');
 * // => true
 */
function has(target, key) {
  return !(0, _isUndefined2.default)((0, _get2.default)(target, key));
}

exports.default = has;