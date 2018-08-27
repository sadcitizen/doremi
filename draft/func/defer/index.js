import delay from '../delay';
import partialRight from '../partial-right';

/**
 * @returns {Function} Returns the new deferred function.
 */
export default partialRight(delay, 1);
