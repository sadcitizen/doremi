/**
 * @param {Array} target
 * @param {...Array} sources
 */
export default function (target, ...sources) {
    return [].concat(target, ...sources);
}
