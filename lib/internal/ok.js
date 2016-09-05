'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function ok(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed.');
    }
}

exports.default = ok;