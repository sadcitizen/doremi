'use strict';

/**
 * Formats a number using fixed-point notation (like Number.toFixed(), but without rounding).
 *
 * @param target
 * @param precision
 * @returns {string}
 */

export default function (target, precision = 2) {
    return target.toFixed(precision + 1).slice(0, -1);
}