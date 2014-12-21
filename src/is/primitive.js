var type = require('./type');
var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

module.exports = function primitive(target) {
    return primitives.indexOf(type(target)) !== -1;
};