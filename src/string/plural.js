/**
 * Plural forms
 */

import isNan from '../is/isNan';
import isArray from '../is/isArray';

let defaultLocale = 'en';

const locales = {
    bm: '1a',   // Bambara
    my: '1a',   // Burmese
    zh: '1a',   // Chinese

    en: '2a',   // English

    be: '3a',   // Belarusian
    bs: '3a',   // Bosnian
    hr: '3a',   // Croatian
    ru: '3a',   // Russian
    sh: '3a',   // Serbo-Croatian
    sr: '3a',   // Serbian
    uk: '3a'    // Ukrainian
};

const rules = {
    '1a': (n) => n,

    '2a': (n) => n != 1 ? 1 : 0,

    '3a': (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
};

function plural(_target, _variantsArray, _locale) {
    if (isNan(Number(_target)) || !isArray(_variantsArray)) {
        return null;
    }

    let locale = _locale && locales[_locale] ? _locale : defaultLocale;
    let ruleName = locales[locale];
    let rule = rules[ruleName];

    return _variantsArray[rule(_target)];
}

export default plural;