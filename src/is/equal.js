var type = require('./type');
var primitive = require('./primitive');

module.exports = function equal(target, other) {
    var tp = type(target);

    if (type(target) !== type(other)) {
        return false;
    }

    if (primitive(target) || tp === 'nan' || tp === 'infinity') {
        return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
    }
};