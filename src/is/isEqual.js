/* jshint -W003 */
import type from './type';
import keys from '../object/keys';
import slice from '../internal/slice';

/**
 * Check if two regular expressions are equal.
 * Regular expressions are compared by their source patterns and flags.
 */
function regexpEqual(target, other) {
    return target.source === other.source &&
        target.global === other.global &&
        target.multiline === other.multiline &&
        target.ignoreCase === other.ignoreCase;
}

/**
 * Check if two array are equal.
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
 * Check if two object are equal
 * Objects must contain equivalent direct members. Members in the prototype chain are ignored.
 *
 * @param target
 * @param other
 * @returns {boolean}
 */
function objectEqual(target, other) {
    var targetKeys = keys(target),
        otherKeys = keys(other);

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
 * Check if `target` and `other` are equivalent to each other.
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
    var tp = type(target);

    if (type(target) !== type(other)) {
        return false;
    }

    if (tp === 'arguments') {
        return arrayEqual(slice(target), slice(other));
    }

    if (tp === 'boolean' || tp === 'date' || tp === 'number') {
        target = +target;
        other = +other;
    }

    if (tp === 'string') {
        target = '' + target;
        other = '' + other;
    }

    if (tp === 'number' || tp === 'nan' || tp === 'infinity') {
        return (target !== 0 || 1 / target === 1 / other) || (target !== target && other !== other);
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

export default isEqual;