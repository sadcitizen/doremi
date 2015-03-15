import after from './function/after';
import async from './function/async'; // defer
import before from './function/before';
import compose from './function/compose';
import curry from './function/curry'; // partial
import debounce from './function/debounce';
import delay from './function/delay';
import demethodize from './function/demethodize';
import flip from './function/flip';
import memoize from './function/memoize';
import noop from './function/noop';
import once from './function/once';
import pipeline from './function/pipeline';
import repeat from './function/repeat';
import throttle from './function/throttle';

export default {
    after: after,
    async: async,
    before: before,
    compose: compose,
    curry: curry,
    debounce: debounce,
    delay: delay,
    demethodize: demethodize,
    flip: flip,
    memoize: memoize,
    noop: noop,
    once: once,
    pipeline: pipeline,
    repeat: repeat,
    throttle: throttle
};