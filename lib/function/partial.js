"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

function partial(target) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, partialArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            partialArgs[_key2] = arguments[_key2];
        }

        return target.apply(this, args.concat(partialArgs));
    };
}

exports.default = partial;