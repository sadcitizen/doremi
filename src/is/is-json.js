'use strict';

import isBlankString from './is-blank-string';

const ESCAPES_REGEX = /\\["\\\/bfnrtu]/g;
const VALUES_REGEX = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const BRACKETS_REGEX = /(?:^|:|,)(?:\s*\[)+/;
const INVALIDS_REGEX = /^[\],:{}\s]*$/;

/**
 * Checks if `target` is a json string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a json string, else 'false'.
 *
 * @example
 *
 * isJson('');
 * // => false
 *
 * isJson('{"a":"b","c":"d"}');
 * // => true
 *
 * isJson('{}');
 * // => true
 */
function isJson(target) {
    return !isBlankString(target) && INVALIDS_REGEX.test(
        target
            .replace(ESCAPES_REGEX, '@')
            .replace(VALUES_REGEX, ']')
            .replace(BRACKETS_REGEX, '')
    );
}

export default isJson;