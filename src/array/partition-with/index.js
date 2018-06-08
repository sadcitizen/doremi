import identity from '../../func/identity';

/**
 * @immutable
 * @param {Array} target
 * @param {Function} [predicate]
 * @param {*} [ctx]
 * @returns {Array}
 */
export default function (target, predicate = identity, ctx) {
    const pass = [];
    const fail = [];

    target.forEach((value, index) => (predicate.call(ctx, value, index, target) ? pass : fail).push(value));

    return [pass, fail];
}
