'use strict';

import isExists from './is-exists';
import isObject from './is-object';

/**
 * Checks if the `target` is created by the `Object` constructor.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a plain object, else 'false'.
 *
 * @example
 *
 * isPlainObject({ a: 'b', c: 'd' });
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
 * isPlainObject(new Person('Barak Obama'));
 * // => false
 */
export default target => isExists(target) && isObject(target) && target.constructor === Object;
