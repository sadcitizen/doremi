(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root._ = factory();
    }
}(this, function () {
    'use strict';

    var _ = {};

    _.VERSION = '<%= version %>';

    // @include is.js

    _.is = is;

    return _;
}));