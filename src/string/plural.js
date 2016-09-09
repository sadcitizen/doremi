/**
 * Plural forms
 *
 * See: http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 *
 * TODO:
 *  - продумать запись формы для нулевого значения (сейчас последний) для форм 6a, 6b
 *  - написать правило для Filipino, Tagalog
 *  - перепроверить все сложные формы
 *  - добавить регулярку на выбор модификации локали (pt_PT, en_en)
 *  - сортировать locales
 *  - добавить
        tt: '',   // Tatar
 */

import isNan from '../is/isNan';
import isArray from '../is/isArray';

let defaultLocale = 'en';

const locales = {
    bm: '1a',   // Bambara
    my: '1a',   // Burmese
    zh: '1a',   // Chinese
    tz: '1a',   // Dzongkha
    ig: '1a',   // Igbo
    id: '1a',   // Indonesian
    ja: '1a',   // Japanese
    jv: '1a',   // Javanese
    kea: '1a',  // Kabuverdianu
    km: '1a',   // Khmer
    ko: '1a',   // Korean
    ses: '1a',  // Koyraboro Senni
    lkt: '1a',  // Lakota
    lo: '1a',   // Lao
    jbo: '1a',  // Lojban
    kde: '1a',  // Makonde
    ms: '1a',   // Malay
    nqo: '1a',  // N’Ko
    sah: '1a',  // Sakha
    sg: '1a',   // Sango
    ii: '1a',   // Sichuan Yi
    th: '1a',   // Thai
    bo: '1a',   // Tibetan
    to: '1a',   // Tongan
    vi: '1a',   // Vietnamese
    wo: '1a',   // Wolof
    yo: '1a',   // Yoruba

    fil: '2a',  // Filipino
    tl: '2a',   // Tagalog

    tzm: '2b',  // Central Atlas Tamazight

    mk: '2c',   // Macedonian

    is: '2d',   // Icelandic

    ak: '2e',   // Akan
    am: '2e',   // Amharic
    hy: '2e',   // Armenian
    as: '2e',   // Assamese
    bn: '2e',   // Bengali
    bh: '2e',   // Bihari
    fr: '2e',   // French
    ff: '2e',   // Fulah
    gu: '2e',   // Gujarati
    guw: '2e',  // Gun
    hi: '2e',   // Hindi
    kab: '2e',  // Kabyle
    kn: '2e',   // Kannada
    ln: '2e',   // Lingala
    mg: '2e',   // Malagasy
    mr: '2e',   // Marathi
    nso: '2e',  // Northern Sotho
    fa: '2e',   // Persian
    pt: '2e',   // Portuguese
    pa: '2e',   // Punjabi
    si: '2e',   // Sinhala
    ti: '2e',   // Tigrinya
    wa: '2e',   // Walloon
    zu: '2e',   // Zulu

    af: '2f',   // Afrikaans
    sq: '2f',   // Albanian
    ast: '2f',  // Asturian
    asa: '2f',  // Asu
    az: '2f',   // Azerbaijani
    eu: '2f',   // Basque
    bem: '2f',  // Bemba
    bez: '2f',  // Bena
    brx: '2f',  // Bodo
    bg: '2f',   // Bulgarian
    ca: '2f',   // Catalan
    ckb: '2f',  // Central Kurdish
    ce: '2f',   // Chechen
    chr: '2f',  // Cherokee
    cgg: '2f',  // Chiga
    da: '2f',   // Danish
    dv: '2f',   // Divehi
    nl: '2f',   // Dutch
    en: '2f',   // English
    eo: '2f',   // Esperanto
    et: '2f',   // Estonian
    pt_PT: '2f',    // European Portuguese
    aa: '2f',   // Ewe
    fo: '2f',   // Faroese
    fi: '2f',   // Finnish
    fur: '2f',  // Friulian
    gl: '2f',   // Galician
    lg: '2f',   // Ganda
    ka: '2f',   // Georgian
    de: '2f',   // German
    el: '2f',   // Greek
    ha: '2f',   // Hausa
    haw: '2f',  // Hawaiian
    hu: '2f',   // Hungarian
    it: '2f',   // Italian
    kaj: '2f',  // Jju
    kkj: '2f',  // Kako
    kl: '2f',   // Kalaallisut
    ks: '2f',   // Kashmiri
    kk: '2f',   // Kazakh
    ku: '2f',   // Kurdish
    ky: '2f',   // Kyrgyz
    lb: '2f',   // Luxembourgish
    jmc: '2f',  // Machame
    ml: '2f',   // Malayalam
    mas: '2f',  // Masai
    mgo: '2f',  // Meta'
    mn: '2f',   // Mongolian
    nah: '2f',  // Nahuatl
    ne: '2f',   // Nepali
    nnh: '2f',  // Ngiemboon
    jgo: '2f',  // Ngomba
    nd: '2f',   // North Ndebele
    no: '2f',   // Norwegian (old code)
    nb: '2f',   // Norwegian Bokmal
    nn: '2f',   // Norwegian Nynorsk
    ny: '2f',   // Nyanja
    nyn: '2f',  // Nyankole
    or: '2f',   // Oriya
    om: '2f',   // Oromo
    os: '2f',   // Ossetic
    pap: '2f',  // Papiamento
    ps: '2f',   // Pashto
    rm: '2f',   // Romansh
    rof: '2f',  // Rombo
    rwk: '2f',  // Rwa
    ssy: '2f',  // Saho
    saq: '2f',  // Samburu
    seh: '2f',  // Sena
    ksb: '2f',  // Shambala
    sn: '2f',   // Shona
    xog: '2f',  // Soga
    so: '2f',   // Somali
    nr: '2f',   // South Ndebele
    sdh: '2f',  // Southern Kurdish
    st: '2f',   // Southern Sotho
    es: '2f',   // Spanish
    sw: '2f',   // Swahili
    ss: '2f',   // Swati
    sv: '2f',   // Swedish
    gsw: '2f',  // Swiss German
    syr: '2f',  // Syriac
    ta: '2f',   // Tamil
    te: '2f',   // Telugu
    teo: '2f',  // Teso
    tig: '2f',  // Tigre
    ts: '2f',   // Tsonga
    tn: '2f',   // Tswana
    tr: '2f',   // Turkish
    tk: '2f',   // Turkmen
    kcg: '2f',  // Tyap
    ur: '2f',   // Urdu
    ug: '2f',   // Uyghur
    uz: '2f',   // Uzbek
    ve: '2f',   // Venda
    vo: '2f',   // Volapük
    vun: '2f',  // Vunjo
    wae: '2f',  // Walser
    fy: '2f',   // Western Frisian
    xh: '2f',   // Xhosa

    lv: '3a',   // Latvian
    prg: '3a',  // Prussian

    ksh: '3b',  // Colognian
    lag: '3b',  // Langi

    kw: '3c',   // Cornish
    smn: '3c',  // Inari Sami
    iu: '3c',   // Inuktitut
    smj: '3c',  // Lule Sami
    naq: '3c',  // Nama
    se: '3c',   // Northern Sami
    smi: '3c',  // Sami languages
    sms: '3c',  // Skolt Sami
    sma: '3c',  // Southern Sami

    be: '3d',   // Belarusian
    bs: '3d',   // Bosnian
    hr: '3d',   // Croatian
    ru: '3d',   // Russian
    sr: '3d',   // Serbian
    sh: '3d',   // Serbo-Croatian
    uk: '3d',   // Ukrainian

    pl: '3e',   // Polish

    lt: '3f',   // Lithuanian

    shi: '3g',  // Tachelhit

    mo: '3h',   // Moldavian
    ro: '3h',   // Romanian

    cs: '3i',   // Czech
    sk: '3i',   // Slovak

    gv: '4a',   // Manx

    gd: '4b',   // Scottish Gaelic

    br: '4c',   // Breton

    dsb: '4d',  // Lower Sorbian
    sl: '4d',   // Slovenian
    hsb: '4d',  // Upper Sorbian

    he: '4e',   // Hebrew

    mt: '4f',   // Maltese

    ga: '5a',   // Irish

    ar: '6a',   // Arabic

    cy: '6b'    // Welsh
};

const rules = {
    /**
     * Bambara, Burmese, Chinese, Dzongkha, Igbo, Indonesian, Japanese, Javanese, Kabuverdianu, Khmer, Korean,
     * Koyraboro Senni, Lakota, Lao, Lojban, Makonde, Malay, N’Ko, Sakha, Sango, Sichuan Yi, Thai, Tibetan, Tongan,
     * Vietnamese, Wolof, Yoruba
     */
    '1a': (n) => n,

    /**
     * Filipino, Tagalog
     */
    '2a': (n) => null,

    /**
     * Central Atlas Tamazight
     */
    '2b': (n) => n == 0 || n == 1 || (n >= 11 && n <= 99) ? 0 : 1,

    /**
     * Macedonian
     */
    '2c': (n) => n % 10 == 1 ? 0 : 1,

    /**
     * Icelandic
     */
    '2d': (n) => n % 10 == 1 && n % 100 != 11 ? 0 : 1,

    /**
     * Akan, Amharic, Armenian, Assamese, Bengali, Bihari, French, Fulah, Gujarati, Gun, Hindi, Kabyle, Kannada,
     * Lingala, Malagasy, Marathi, Northern Sotho, Persian, Portuguese, Punjabi, Sinhala, Tigrinya, Walloon, Zulu
     */
    '2e': (n) => n > 1 ? 1 : 0,

    /**
     * Afrikaans, Albanian, Asturian, Asu, Azerbaijani, Basque, Bemba, Bena, Bodo, Bulgarian, Catalan, Central Kurdish,
     * Chechen, Cherokee, Chiga, Danish, Divehi, Dutch, English, Esperanto, Estonian, European Portuguese, Ewe, Faroese,
     * Finnish, Friulian, Galician, Ganda, Georgian, German, Greek, Hausa, Hawaiian, Hungarian, Italian, Jju, Kako,
     * Kalaallisut, Kashmiri, Kazakh, Kurdish, Kyrgyz, Luxembourgish, Machame, Malayalam, Masai, Metaʼ, Mongolian,
     * Nahuatl, Nepali, Ngiemboon, Ngomba, North Ndebele, Norwegian, Norwegian Bokmål, Norwegian Nynorsk, Nyanja,
     * Nyankole, Oriya, Oromo, Ossetic, Papiamento, Pashto, Romansh, Rombo, Rwa, Saho, Samburu, Sena, Shambala, Shona,
     * Soga, Somali, South Ndebele, Southern Kurdish, Southern Sotho, Spanish, Swahili, Swati, Swedish, Swiss German,
     * Syriac, Tamil, Telugu, Teso, Tigre, Tsonga, Tswana, Turkish, Turkmen, Tyap, Urdu, Uyghur, Uzbek, Venda, Volapük,
     * Vunjo, Walser, Western Frisian, Xhosa
     */
    '2f': (n) => n == 1 ? 0 : 1,

    /**
     * Latvian, Prussian
     */
    '3a': (n) => n % 10 == 1 && n % 100 != 11 ? 1 : n != 0 ? 2 : 0,

    /**
     * Colognian, Langi
     */
    '3b': (n) => n == 1 ? 0 : n == 0 ? 2 : 1,

    /**
     * Cornish, Inari Sami, Inuktitut, Lule Sami, Nama, Northern Sami, Sami languages, Skolt Sami, Southern Sami
     */
    '3c': (n) => n === 1 ? 0 : n === 2 ? 1 : 2,

    /**
     * Belarusian, Bosnian, Croatian, Russian, Serbian, Serbo-Croatian, Ukrainian
     */
    '3d': (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,

    /**
     * Polish
     */
    '3e': (n) => n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,

    /**
     * Lithuanian
     */
    '3f': (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 2 : 1,

    /**
     * Tachelhit
     */
    '3g': (n) => n == 0 || n == 1 ? 0 : n <= 10 ? 1 : 2,

    /**
     * Moldavian, Romanian
     */
    '3h': (n) => n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2,

    /**
     * Czech, Slovak
     */
    '3i': (n) => n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2,

    /**
     * Manx
     */
    '4a': (n) => (n % 10) == 1 ? 0 : n % 10 == 2 ? 1 : [0, 20, 40, 60].indexOf(n % 100) !== -1 ? 2 : 3,

    /**
     * Scottish Gaelic
     */
    '4b': (n) => n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 0 && n < 20 ? 2 : 3,

    /**
     * Breton
     */
    '4c': (n) => n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91 ? 0 : n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92 ? 1 : (n % 10 == 3 || n % 10 == 4 || n % 10 == 9) && n % 100 != 13 && n % 100 != 14 && n % 100 != 19 && n % 100 != 73 && n % 100 != 74 && n % 100 != 79 && n % 100 != 93 && n % 100 != 94 && n % 100 != 99 ? 2 : n % 1000000 == 0 && n != 0 ? 3 : 4,

    /**
     * Lower Sorbian, Slovenian, Upper Sorbian
     */
    '4d': (n) => n % 100 == 1 ? 0 : n % 100 == 2 ? 1 : n % 100 == 3 || n % 100 == 4 ? 2 : 3,

    /**
     * Hebrew
     */
    '4e': (n) => n == 1 ? 0 : n == 2 ? 1 : n >= 20 && n % 10 == 0 ? 2 : 3,

    /**
     * Maltese
     */
    '4f': (n) => n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 <= 10 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3,

    /**
     * Irish
     */
    '5a': (n) => n == 1 ? 0 : n == 2 ? 1 : n >= 3 && n <= 6 ? 2 : n >= 7 && n <= 10 ? 3 : 4,

    /**
     * Arabic
     */
    '6a': (n) => n == 0 ? 5 : n == 1 ? 0 : n == 2 ? 1 : n % 100 >= 3 && n % 100 <= 10 ? 2 : n % 100 >= 11 && n % 100 <= 99 ? 3 : 4,

    /**
     * Welsh
     */
    '6b': (n) => n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : n == 6 ? 3 : n == 0 ? 5 : 4
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