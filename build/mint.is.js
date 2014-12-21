!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.is=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var is = {};

is.VERSION = '<%= version %>';

['array', 'boolean', 'date', 'element', 'nan', 'number', 'object', 'regexp', 'string'].forEach(function (type) {
    is[type] = function (target) {
        return is.type(target) === type;
    };
});

is.args = function (target) {
    return is.type(target) === 'arguments';
};

is.defined = function (target) {
    return target !== 'undefined';
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

is.primitive = function (target) {
    var type = is.type(target);
    return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || type === 'null';
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

module.exports = is;
},{}]},{},[1])(1)
});