/**
 * @params {Function[]} fns
 * @returns {Function}
 */
export default (...fns) => initial => fns.reduce((f, g) => g(f), initial);
