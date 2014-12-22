var type = require('./type');

module.exports = function equal(target, other) {
    var tp = type(target);

    if (type(target) !== type(other)) {
        return false;
    }

    if (tp === 'regexp') {
        return target.source === other.source &&
            target.global === other.global &&
            target.multiline === other.multiline &&
            target.ignoreCase === other.ignoreCase;
    }

    if (tp === 'boolean' || tp === 'date' || tp === 'number') {
        target = +target;
        other = +other;
    }

    if (tp === 'string') {
        target = '' + target;
        other = '' + other;
    }

    if (tp === 'number' || tp === 'nan' || tp === 'infinity') {
        return (target !== 0 || 1 / target === 1 / other) || (target !== target && other !== other);
    }

    return target === other;
};