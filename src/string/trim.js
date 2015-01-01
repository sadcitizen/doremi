var whitespaces = require('../internal/whitespaces');
var string = require('../to/string');
var rest = require('../list/rest');

/**
 *
 * @param {String} target
 * @returns {*}
 */
module.exports = function trim(target) {
    var chars = rest(arguments).join('');
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
};