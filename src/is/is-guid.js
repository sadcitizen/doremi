import isString from '../string/is-string';
const GUID_REGEX = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}$/;

/**
 * Checks if `target` is an guid string (UUID v4).
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
 * isGuid('');
 * // => false
 *
 * isGuid('550e8400-e29b-41d4-a716-446655440000');
 * // => true
 */
export default target => isString(target) && GUID_REGEX.test(target);
