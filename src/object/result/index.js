import isFunction from '../../func/is-function';
import getValue from '../get-value';

/**
 * Resolves the value of property `key` on `target`.
 * If the value of `key` is a function it is invoked and its result
 * is returned, else the property value is returned.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param {Object} target The object to query.
 * @param {string} key The name of property to resolve.
 * @param {*} def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var obj = { attr: 'value', arr: [0, 1, 2], num: 2, falsey: '', method: function () { return this.attr; } };
 *
 * result(obj, 'attr');
 * // => 'value'
 *
 * result(obj, 'some', 42);
 * // => 42
 *
 * result(obj, 'method');
 * // => 'value'
 */
export default function (target, key, def) {
    let prop = getValue(target, key, def);
    return isFunction(prop) ? prop.call(target) : prop;
}
