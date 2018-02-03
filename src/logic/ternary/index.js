/**
 * Returns falsy value if all conditions are false, truthy otherwise.
 *
 * @param {boolean} condition The condition to check.
 * @param {*} truthy The truthy value.
 * @param {*} falsy The falsy value.
 * @return {*} Returns truthy or falsy value.
 *
 * @example
 * const a = 42;
 * ternary(a > 0, 1, -1);
 * // => 1
 *
 * ternary(a !== 42, 'ok', 'not ok');
 * // => 'not ok'
 */
export default (condition, truthy, falsy) => condition ? truthy : falsy;
