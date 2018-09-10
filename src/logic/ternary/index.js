/**
 * Checks the given condition and returns falsy value if condition is false, truthy otherwise.
 *
 * @category logic
 * @param {boolean} condition The condition to check.
 * @param {*} truthy The truthy value.
 * @param {*} falsy The falsy value.
 * @return {*} Returns truthy of falsy value.
 */
export default (condition, truthy, falsy) => condition ? truthy : falsy;
