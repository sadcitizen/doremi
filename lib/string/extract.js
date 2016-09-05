'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target, pattern) {
    var seps = arguments.length <= 2 || arguments[2] === undefined ? es6 : arguments[2];

    target = (0, _stringify2.default)(target);
    pattern = (0, _stringify2.default)(pattern);

    if (target.length === 0 || pattern.length === 0 || target === pattern) {
        return null;
    }

    var escaped = seps.map(function (x) {
        return escape(x);
    });
    var syntax = new RegExp(escaped[0] + '[^' + seps.join('') + ']+?' + escaped[1], 'g');
    var regex = new RegExp(pattern.split(syntax).map(function (x) {
        return escape(x);
    }).join('(.+)'));

    var tokens = pattern.match(syntax);

    if (!tokens) {
        return null;
    }

    var matches = target.match(regex);

    if (!matches) {
        return null;
    }

    matches = matches.splice(1);
    tokens = tokens.map(function (x) {
        return x.replace(new RegExp(escaped.join('|'), 'g'), '');
    });

    var result = {};

    tokens.forEach(function (token, i) {
        return (0, _set2.default)(result, token, matches[i]);
    });

    return result;
};

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _set = require('../object/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var es6 = ['${', '}'];
var escape = function escape(target) {
    return target.replace(/[\\\^\$\*\+\.\?\(\)]/g, '\\$&');
};

/**
 * Extracts an object from a stringify based on a pattern.
 *
 * @param {string} target The stringify to extract from.
 * @param {string} pattern The pattern.
 * @param {Array} seps The array of separators.
 * @returns {Object|null} Returns the extracted object or null.
 *
 * @example
 *
 * extract('bill@gates.com', '${user}@${host}.${domain}');
 * => { user: 'bill', host: 'gates', domain: 'com' }
 */