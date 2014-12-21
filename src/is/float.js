var type = require('./type');

module.exports = function float(target) {
    return type(target) === 'number' && target % 1 !== 0;
};
