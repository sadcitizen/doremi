/**
 * Returns a new function that will always invoke `fn` after `ms` milliseconds.
 *
 * @param {Function} fn The function to invoke after a delay.
 * @param {number} ms The number of milliseconds to wait before invoking `target`.
 * @param {*} context
 * @returns {Function} Returns the new delayed function.
 *
 * @example
 * const delayedLog = delay(console.log, 50);
 * delayedLog('Hi!');
 * => 'Hi!'
 */
export default (fn, ms, context = null) => (...args) => setTimeout(() => fn.apply(context, args), ms);
