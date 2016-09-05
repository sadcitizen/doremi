"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

function delay(target, ms) {
    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        setTimeout(function () {
            return target.apply(context, args);
        }, ms);
    };
}

exports.default = delay;