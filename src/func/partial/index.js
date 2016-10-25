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
export default (target, ...args) => (...partialArgs) => target(...args, ...partialArgs);
