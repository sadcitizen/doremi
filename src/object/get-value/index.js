import isDefined from '../../common/is-defined';

/**
 * @param {Object} target
 * @param {string} path
 * @param {*} [def]
 * @returns {*}
 */
export default function (target, path, def) {
    const steps = path.split('.');
    const last = steps.pop();

    let obj = target;
    let key;

    /* eslint-disable no-cond-assign */
    while (key = steps.shift()) {
        obj = obj[key];

        if (!isDefined(obj)) {
            return def;
        }
    }
    /* eslint-enable no-cond-assign */

    return obj[last] !== undefined ? obj[last] : def;
}
