var is = require('../is');

module.exports = function has(target, key) {
    if (!is.object(target)) {
        throw new TypeError('Target must be an object!');
    }

    return Object.hasOwnProperty.call(target, key);
};