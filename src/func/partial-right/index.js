/**
 * Return a new function that invokes `fn` with `args` appended to the arguments it receives.
 *
 * @param {Function} fn The function to partially apply arguments to.
 * @param {Array} args The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 *
 * @example
 * function say(word, name) {
 *     return word + ', ' + name + '!';
 * }
 *
 * var sayWorld = partial('World');
 * sayWorld('Hello');
 * // => 'Hello, World!'
 */
export default (fn, ...args) => (...partialArgs) => fn(...partialArgs, ...args);
