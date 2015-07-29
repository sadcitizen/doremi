'use strict';

import isNumber from '../is/isNumber';
import log10 from '../math/log10';
import floor from '../math/floor';

const symbols = {
    kilo: 'k', // 1000 ^ 1
    mega: 'M', // 1000 ^ 2
    giga: 'G', // 1000 ^ 3
    tera: 'T', // 1000 ^ 4
    peta: 'P', // 1000 ^ 5
    exa: 'E', // 1000 ^ 6
    zeta: 'Z', // 1000 ^ 7
    yotta: 'Y' // 1000 ^ 8
};

var prefixes = {
    3: 'kilo',
    6: 'mega',
    9: 'giga',
    12: 'tera',
    15: 'peta',
    18: 'exa',
    21: 'zeta',
    24: 'yotta'
};

/**
 * Creates the abbreviated number as string.
 *
 * @param {number} target The number to abbreviate.
 * @param {number} precision
 * @param {object} dict
 * @returns {string} Returns the abbreviated number.
 *
 * @example
 *
 * abbreviate(2300);
 * // => '2.3k'
 *
 * abbreviate(1000000);
 * // => '1M'
 */

export default function (target, precision = 2, dict = symbols) {
    if (!isNumber(target)) {
        return '';
    }

    const basis = floor(log10(target) / 3) * 3;
    const mantissa = target / Math.pow(10, basis);

    return mantissa.toFixed(precision) + dict[prefixes[basis]];
}
