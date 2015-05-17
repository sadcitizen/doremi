/**
 * Return a partially applied function supplying default arguments.
 *
 * @param {Function} target The function to partially apply arguments to.
 * @param {Array} args The arguments to be partially applied.
 * @returns {Function}
 *
 * @example
 *
 * function say(word, name) {
 *     return word + ', ' + name + '!';
 * }
 *
 * var sayHello = partial('Hello');
 * sayHello('World');
 * // => 'Hello, World!'
 */

function partial(target, ...args) {
    return function (...partialArgs) {
        return target.apply(this, args.concat(partialArgs));
    };
}

export default partial;