'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

var _decapitalize = require('./decapitalize');

var _decapitalize2 = _interopRequireDefault(_decapitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `target` to camel case.
 *
 * @param {string|*} target The stringify to convert.
 * @returns {string} Returns camel cased stringify.
 *
 * @example
 * camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * camelize('  --dolor --sit -');
 * // => 'dolorSit'
 */
function camelize(target) {
    target = (0, _trim2.default)(target);

    if (target.length === 0) {
        return '';
    }

    target = target.replace(/[-_\s]+(.)?/g, function (match, char) {
        return char ? char.toUpperCase() : '';
    });

    return (0, _decapitalize2.default)(target);
}

exports.default = camelize;