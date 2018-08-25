import isDefined from '../../common/is-defined';
import isObject from '../../common/is-object';

/**
 * Checks if the `target` is created by the `Object` constructor.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a plain object, else 'false'.
 *
 * @example
 *
 * isPlain({ a: 'b', c: 'd' });
 * // => true
 *
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * Person.prototype.introduce = function() {
 *     return 'My name is ' + this.name;
 * };
 *
 * isPlain(new Person('Barak Obama'));
 * // => false
 */
export default target => isDefined(target) && isObject(target) && target.constructor === Object;
