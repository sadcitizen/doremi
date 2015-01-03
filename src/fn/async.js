var delay = require('./delay');

module.exports = function async(target) {
    return delay(target, 1);
};