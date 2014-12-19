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

    _.VERSION = '0.0.1';

    var is = function (o) {
        if (o instanceof is) return o;
        if (!(this instanceof is)) return new is(o);
        this._wrapped = o;
    };

    return _;
}));