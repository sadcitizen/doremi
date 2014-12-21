var type = require('./type');

module.exports = function even(target) {
    return type(target) === 'number' && target % 2 === 0;
};