var exists = require('../is/exists');

module.exports = function string(target) {
    return !exists(target) ? '' : target.toString();
};