import string from './string';
var GUID_REGEX = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}$/;

/**
 * Check if `target` is an guid string (UUID v4).
 *
 * Wikipedia:
 * Version 4 UUIDs use a scheme relying only on random numbers.
 * This algorithm sets the version number (4 bits) as well as two reserved bits.
 * All other bits (the remaining 122 bits) are set using a random or pseudorandom data source.
 * Version 4 UUIDs have the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is any hexadecimal
 * digit and y is one of 8, 9, A, or B (e.g., f47ac10b-58cc-4372-a567-0e02b2c3d479).
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is an guid string, else `false`.
 *
 * @example
 *
 * is.guid('');
 * // => false
 *
 * is.guid('550e8400-e29b-41d4-a716-446655440000');
 * // => true
 */
function guid(target) {
    return string(target) && GUID_REGEX.test(target);
}

export default guid;