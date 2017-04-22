import getValue from '../get-value';

/**
 * Creates a function which returns the property value of `key` on `target`
 * or default value `def` if the property value is undefined.
 *
 * @param {string} key The property name.
 * @param {*} def Default value.
 * @returns {Function} Returns the new function.
 *
 * @example
 *
 * var obj = { lorem: 'ipsum' };
 *
 * var lorem = prop('lorem');
 * lorem(obj);
 * // => 'ipsum'
 *
 * var sit = prop('sit', 'amet');
 * sit(obj);
 * // => 'amet'
 *
 * var users = [{ name: 'John', age: 23 }, { name: 'Jane', age: 21 }];
 * var names = prop('name');
 * users.map(names);
 * // => ['John', 'Jane']
 */
export default (key, def) => target => getValue(target, key, def);
