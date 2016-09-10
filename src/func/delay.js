/**
 * Returns a new function that will always invoke `target` after `ms` milliseconds.
 *
 * @param {Function} target The function to invoke after a delay.
 * @param {number} ms The number of milliseconds to wait before invoking `target`.
 * @param {*} context
 * @returns {Function} Returns the new delayed function.
 *
 * @example
 *
 * const delayedLog = delay(console.log, 50);
 * delayedLog('Hi!');
 * => 'Hi!'
 */

function delay(target, ms, context = null) {
    return function (...args) {
        setTimeout(() => target.apply(context, args), ms);
    };
}

export default delay;