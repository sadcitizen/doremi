'use strict';

/**
 * Creates a copy of the date.
 *
 * @param {Date} target The date to clone.
 * @returns {Date} Return new date.
 *
 * @example
 *
 * const now = new Date(2015, 0, 1);
 * clone(now).toUTCString();
 * // => Wed, 31 Dec 2014 19:00:00 GMT
 */
export default function (target) {
    return new Date(target.valueOf());
}