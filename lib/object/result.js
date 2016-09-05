'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = require('../is/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolves the value of property `key` on `target`.
 * If the value of `key` is a function it is invoked and its result
 * is returned, else the property value is returned.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param {Object} target The object to query.
 * @param {string} key The name of property to resolve.
 * @param {*} def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var obj = { attr: 'value', arr: [0, 1, 2], num: 2, falsey: '', method: function () { return this.attr; } };
 *
 * result(obj, 'attr');
 * // => 'value'
 *
 * result(obj, 'some', 42);
 * // => 42
 *
 * result(obj, 'method');
 * // => 'value'
 */
function result(target, key, def) {
  var prop = (0, _get2.default)(target, key, def);
  return (0, _isFunction2.default)(prop) ? prop.call(target) : prop;
}

exports.default = result;