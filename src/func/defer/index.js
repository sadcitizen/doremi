import delay from '../delay';
import partialRight from '../partial-right';

/**
 * Returns a new function that invoked at the end of the event loop.
 *
 * @returns {Function} Returns the new deferred function.
 *
 * @example
 * const deferred = defer(console.log);
 * deferred('Hi!');
 * => 'Hi!'
 */
export default partialRight(delay, 0);
