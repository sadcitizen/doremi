import fn from '../is/fn';
import deepGet from './deepGet';

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
 * ob.result(obj, 'attr');
 * // => 'value'
 *
 * ob.result(obj, 'some', 42);
 * // => 42
 *
 * ob.result(obj, 'method');
 * // => 'value'
 */
function result(target, key, def) {
    var prop = deepGet(target, key, def);
    return fn(prop) ? prop.call(target) : prop;
}

export default result;