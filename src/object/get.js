var is = require('../is');

module.exports = function get(target, prop) {
    if (!is.object(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!is.string(prop)) {
        throw new TypeError('Property must be a string!');
    }

    var obj = target,
        parts = prop.split('.'),
        last = parts.pop();

    /* jshint -W084 */
    while (prop = parts.shift()) {
        obj = obj[prop];
        if (!is.exists(obj)) {
            return;
        }
    }
    /* jshint +W084 */

    return obj[last];
};