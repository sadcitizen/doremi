import blankString from './blankString';
var ESCAPES_REGEX = /\\["\\\/bfnrtu]/g;
var VALUES_REGEX = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var BRACKETS_REGEX = /(?:^|:|,)(?:\s*\[)+/;
var INVALIDS_REGEX = /^[\],:{}\s]*$/;

/**
 * Checks if `target` is a json string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a json string, else 'false'.
 *
 * @example
 *
 * is.json('');
 * // => false
 *
 * is.json('{"a":"b","c":"d"}');
 * // => true
 *
 * is.json('{}');
 * // => true
 */
function json(target) {
    return !blankString(target) && INVALIDS_REGEX.test(
        target
            .replace(ESCAPES_REGEX, '@')
            .replace(VALUES_REGEX, ']')
            .replace(BRACKETS_REGEX, '')
    );
}

export default json;