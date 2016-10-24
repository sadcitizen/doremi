'use strict';

import isNumber from '../is-number';
import log from '../../math/log';
import floor from '../../math/floor';
import fixed from '../fixed';

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

const prefixes = {
    3: 'kilo',
    6: 'mega',
    9: 'giga',
    12: 'tera',
    15: 'peta',
    18: 'exa',
    21: 'zeta',
    24: 'yotta'
};

const base = 10;

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

    const basis = floor(log(Math.abs(target), base) / 3) * 3;

    return fixed(target / Math.pow(base, basis), precision) + dict[prefixes[basis]];
}
