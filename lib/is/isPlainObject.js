'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isExists = require('./isExists');

var _isExists2 = _interopRequireDefault(_isExists);

var _isObject = require('./isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the `target` is created by the `Object` constructor.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a plain object, else 'false'.
 *
 * @example
 *
 * isPlainObject({ a: 'b', c: 'd' });
 * // => true
 *
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * Person.prototype.introduce = function() {
 *     return 'My name is ' + this.name;
 * };
 *
 * isPlainObject(new Person('Barak Obama'));
 * // => false
 */
exports.default = function (target) {
  return (0, _isExists2.default)(target) && (0, _isObject2.default)(target) && target.constructor === Object;
};