/**
 * @param {boolean} condition The condition to check.
 * @param {*} truthy The truthy value.
 * @param {*} falsy The falsy value.
 * @return {*} Returns truthy or falsy value.
 */
export default (condition, truthy, falsy) => condition ? truthy : falsy;
