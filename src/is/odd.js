var type = require('./type');

module.exports = function odd(target) {
    return type(target) === 'number' && target % 2 !== 0;
};