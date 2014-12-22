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

    if (tp === 'array') {
        if (target.length !== other.length) {
            return false;
        }

        for (var i = 0, length = target.length; i < length; i++) {
            if (!equal(target[i], other[i])) {
                break;
            }
        }

        return i === length;
    }

    if (tp === 'object') {
        
    }

    return target === other;
};