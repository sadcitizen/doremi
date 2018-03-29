import isNumber from '../is-number';
import log from '../log';
import floor from '../floor';
import fixed from '../fixed';

const { abs, pow } = Math;

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
 * @param {number} value
 * @param {number} precision
 * @param {Object} dict
 * @returns {string}
 */
export default function (value, precision = 2, dict = symbols) {
    if (!isNumber(value)) {
        return '';
    }

    const basis = floor(log(abs(value), base) / 3) * 3;

    return fixed(value / pow(base, basis), precision) + dict[prefixes[basis]];
}
