'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function distinct(target) {
    var getter = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var result = [];
    var seen = [];

    for (var i = 0; i < target.length; i++) {
        var value = target[i];
        var comparable = getter ? getter(value) : value;

        if (!(0, _contains2.default)(seen, comparable)) {
            result.push(value);
            seen.push(comparable);
        }
    }

    return result;
} /**
   * Returns distinct elements from an array
   *
   * @param {Array} target
   * @param {Function} getter Optional. A function to apply before comparing elements.
   * @returns {Array} Returns new array with unique values.
   *
   * @example
   *
   * distinct([1, 2, 1, 3, 1, 4]);
   * // => [1, 2, 3, 4]
   *
   * distinct([{name: 'Casper'}, {name: 'Richard'}, {name: 'Casper'}], i => i.name);
   * // => [{name: 'Casper'}, {name: 'Richard'}]
   */

exports.default = distinct;