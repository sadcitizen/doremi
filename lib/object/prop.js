'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function which returns the property value of `key` on `target`
 * or default value `def` if the property value is undefined.
 *
 * @param {string} key The property name.
 * @param {*} def Default value.
 * @returns {Function} Returns the new function.
 *
 * @example
 *
 * var obj = { lorem: 'ipsum' };
 *
 * var lorem = prop('lorem');
 * lorem(obj);
 * // => 'ipsum'
 *
 * var sit = prop('sit', 'amet');
 * sit(obj);
 * // => 'amet'
 *
 * var users = [{ name: 'John', age: 23 }, { name: 'Jane', age: 21 }];
 * var names = prop('name');
 * users.map(names);
 * // => ['John', 'Jane']
 */
function prop(key, def) {
  return function (target) {
    return (0, _get2.default)(target, key, def);
  };
}

exports.default = prop;