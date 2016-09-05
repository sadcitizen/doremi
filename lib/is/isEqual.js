'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _keys = require('../object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slice = require('../internal/slice');

var _slice2 = _interopRequireDefault(_slice);

var _stringify = require('../string/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if two regular expressions are equal.
 * Regular expressions are compared by their source patterns and flags.
 */
/* jshint -W003 */
function regexpEqual(target, other) {
    return target.source === other.source && target.global === other.global && target.multiline === other.multiline && target.ignoreCase === other.ignoreCase;
}

/**
 * Checks if two array are equal.
 * Arrays must contain equivalent contents.
 */
function arrayEqual(target, other) {
    if (target.length !== other.length) {
        return false;
    }

    for (var i = 0, length = target.length; i < length; i++) {
        if (!isEqual(target[i], other[i])) {
            break;
        }
    }

    return i === length;
}

/**
 * Checks if two object are equal
 * Objects must contain equivalent direct members. Members in the prototype chain are ignored.
 *
 * @param target
 * @param other
 * @returns {boolean}
 */
function objectEqual(target, other) {
    var targetKeys = (0, _keys2.default)(target);
    var otherKeys = (0, _keys2.default)(other);

    if (target.constructor !== other.constructor) {
        return false;
    }

    if (arrayEqual(targetKeys, otherKeys)) {
        for (var i = 0, length = targetKeys.length; i < length; i++) {
            if (!isEqual(target[targetKeys[i]], other[otherKeys[i]])) {
                break;
            }
        }

        return i === length;
    } else {
        return false;
    }
}

/**
 * Checks if `target` and `other` are equivalent to each other.
 *
 * Identical values (target === other) are automatically equivalent.
 * Primitive values are compared by value. Primitive values and their object wrappers are equivalent.
 * Null, undefined and functions are compared by identity.
 * Dates are compared by their millisecond representations.
 * Function is equal to itself. Two functions are not equivalent.
 *
 * @param target The first value to check.
 * @param other The second value to check.
 * @returns {boolean} Returns `true` if `target` is equivalent to `other`, else `false`.
 *
 * @example
 *
 * isEqual([], []);
 * // => true
 *
 * isEqual({}, {});
 * // => true
 *
 * isEqual(new Date(2014, 10, 2), new Date(2014, 10, 2));
 * // => true
 */
function isEqual(target, other) {
    var tp = (0, _type2.default)(target);

    if ((0, _type2.default)(target) !== (0, _type2.default)(other)) {
        return false;
    }

    if (tp === 'arguments') {
        return arrayEqual((0, _slice2.default)(target), (0, _slice2.default)(other));
    }

    if (tp === 'boolean' || tp === 'date' || tp === 'number') {
        target = +target;
        other = +other;
    }

    if (tp === 'string') {
        target = (0, _stringify2.default)(target);
        other = (0, _stringify2.default)(other);
    }

    if (tp === 'number' || tp === 'nan' || tp === 'infinity') {
        return target !== 0 || 1 / target === 1 / other || target !== target && other !== other;
    }

    if (tp === 'array') {
        return arrayEqual(target, other);
    }

    if (tp === 'object') {
        return objectEqual(target, other);
    }

    if (tp === 'regexp') {
        return regexpEqual(target, other);
    }

    return target === other;
}

exports.default = isEqual;