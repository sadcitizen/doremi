var type = require('./type');

module.exports = function fn(target) {
    return type(target) === 'function';
};