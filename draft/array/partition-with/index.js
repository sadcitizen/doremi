/**
 * @immutable
 * @param {Array} target
 * @param {BooleanConstructor|Function} [predicate]
 * @param {*} [ctx]
 * @returns {Array}
 */
export default function (target, predicate = Boolean, ctx = null) {
    const pass = [];
    const fail = [];

    target.forEach((value, index) => (predicate.call(ctx, value, index, target) ? pass : fail).push(value));

    return [pass, fail];
}
