var is = {};

['array', 'boolean', 'date', 'element', 'nan', 'number', 'object', 'regexp', 'string'].forEach(function (type) {
    is[type] = function (target) {
        return is.type(target) === type;
    };
});

is.args = function (target) {
    return is.type(target) === 'arguments';
};

is.equal = function (target, other) {
    return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
};

is.exists = function (target) {
    var type = is.type(target);
    return type !== 'undefined' && type !== 'null';
};

is.float = function (target) {
    return is.number(target) && target % 1 !== 0;
};

is.fn = function (target) {
    return is.type(target) === 'function';
};

is.int = function (target) {
    return is.not(is.float, target);
};

is.not = function () {
    var args = Array.prototype.slice.call(arguments);

    return !Boolean(args.length === 1 ? args[0] : args[0].apply(null, args.slice(1, args.length)));
};

is.type = function (target) {
    if (target === undefined) {
        return 'undefined';
    }

    if (target === null) {
        return 'null';
    }

    if (target && (target.nodeType === 1 || target.nodeType === 9)) {
        return 'element';
    }

    var tp = Object.prototype.toString.call(target).slice(8, -1).toLowerCase();

    if (tp === 'number') {
        if (isNaN(target)) {
            return 'nan';
        }
        if (!isFinite(target)) {
            return 'infinity';
        }
    }

    return tp;
};