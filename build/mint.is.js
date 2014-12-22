!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.is=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var is = {};

is.VERSION = '<%= version %>';

['date', 'element', 'nan', 'number', 'object', 'regexp', 'string'].forEach(function (type) {
    is[type] = function (target) {
        return is.type(target) === type;
    };
});

is.args = require('./is/args');
is.array = require('./is/array');
is.bool = require('./is/bool');
is.defined = require('./is/defined');
is.empty = require('./is/empty');
is.equal = require('./is/equal');
is.even = require('./is/even');
is.exists = require('./is/exists');
is.float = require('./is/float');
is.fn = require('./is/fn');
is.int = require('./is/int');
is.json = require('./is/json');
is.not = require('./is/not');
is.odd = require('./is/odd');
is.primitive = require('./is/primitive');
is.type = require('./is/type');

module.exports = is;
},{"./is/args":2,"./is/array":3,"./is/bool":4,"./is/defined":5,"./is/empty":6,"./is/equal":7,"./is/even":8,"./is/exists":9,"./is/float":10,"./is/fn":11,"./is/int":12,"./is/json":13,"./is/not":14,"./is/odd":15,"./is/primitive":16,"./is/type":17}],2:[function(require,module,exports){
var type = require('./type');

module.exports = function args(target) {
    return type(target) === 'arguments';
};
},{"./type":17}],3:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is array.
 *
 * @param {*} target The value to check/
 * @returns {boolean} Returns `true` if `target` is array, else `false`.
 *
 * @example
 *
 * is.array([]);
 * // => true
 *
 * is.array(42);
 * // => false
 */
function array(target) {
    return type(target) === 'array';
}

module.exports = Array.isArray || array;
},{"./type":17}],4:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is boolean.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is boolean, else `false`.
 *
 * @example
 *
 * is.bool(true);
 * // => true
 *
 * is.bool('');
 * // => false
 */
module.exports = function bool(target) {
    return type(target) === 'boolean';
};
},{"./type":17}],5:[function(require,module,exports){
/**
 * Check if `target` is defined.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is defined, else `false`.
 *
 * @example
 *
 * is.defined(void 0);
 * // => false
 *
 * is.defined('');
 * // => true
 */

module.exports = function defined(target) {
    return target !== undefined;
};
},{}],6:[function(require,module,exports){
var type = require('./type');
var exists = require('./exists');

module.exports = function empty(target) {
    if (!exists(target)) {
        return true;
    }

    var tp = type(target);

    if (tp === 'array' || tp === 'string' || tp === 'arguments') {
        return target.length === 0;
    }

    if (tp === 'object') {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
};
},{"./exists":9,"./type":17}],7:[function(require,module,exports){
module.exports = function equal(target, other) {
    return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
};
},{}],8:[function(require,module,exports){
var type = require('./type');

module.exports = function even(target) {
    return type(target) === 'number' && target % 2 === 0;
};
},{"./type":17}],9:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 *
 * is.exists(null);
 * // => false
 *
 * is.exists('');
 * // => true
 *
 */
module.exports = function exists(target) {
    var tp = type(target);
    return tp !== 'undefined' && tp !== 'null';
};
},{"./type":17}],10:[function(require,module,exports){
var type = require('./type');

module.exports = function float(target) {
    return type(target) === 'number' && target % 1 !== 0;
};

},{"./type":17}],11:[function(require,module,exports){
var type = require('./type');

module.exports = function fn(target) {
    return type(target) === 'function';
};
},{"./type":17}],12:[function(require,module,exports){
var not = require('./not');
var float = require('./float');

module.exports = function int (target) {
    return not(float, target);
};
},{"./float":10,"./not":14}],13:[function(require,module,exports){
module.exports = function json(target) {
    try {
        JSON.parse(target);
    } catch (e) {
        return false;
    }
    return true;
};
},{}],14:[function(require,module,exports){
module.exports = function not() {
    var args = Array.prototype.slice.call(arguments);

    return !Boolean(args.length === 1 ? args[0] : args[0].apply(null, args.slice(1, args.length)));
};
},{}],15:[function(require,module,exports){
var type = require('./type');

module.exports = function odd(target) {
    return type(target) === 'number' && target % 2 !== 0;
};
},{"./type":17}],16:[function(require,module,exports){
var type = require('./type');
var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

module.exports = function primitive(target) {
    return primitives.indexOf(type(target)) !== -1;
};
},{"./type":17}],17:[function(require,module,exports){
module.exports = function type(target) {
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
},{}]},{},[1])(1)
});