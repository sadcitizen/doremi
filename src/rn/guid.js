var hex = require('./hex');
var choice = require('./choice');

module.exports = function guid() {
    return hex(8) + '-' + hex(4) + '-4' + hex(3) + '-' +
        choice(8, 9, 'a', 'b') + hex(3) + '-' + hex(12);
};
