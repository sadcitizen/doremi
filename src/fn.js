import after from './fn/after';
import async from './fn/async'; // defer
import before from './fn/before';
import compose from './fn/compose';
import curry from './fn/curry'; // partial
import debounce from './fn/debounce';
import delay from './fn/delay';
import demethodize from './fn/demethodize';
import flip from './fn/flip';
import memoize from './fn/memoize';
import noop from './fn/noop';
import once from './fn/once';
import pipeline from './fn/pipeline';
import repeat from './fn/repeat';
import throttle from './fn/throttle';

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