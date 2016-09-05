"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// TODO: add description

function partialRight(target) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, partialArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            partialArgs[_key2] = arguments[_key2];
        }

        return target.apply(this, partialArgs.concat(args));
    };
}

exports.default = partialRight;