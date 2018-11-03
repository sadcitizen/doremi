import startOf from '../start-of';

/**
 * Creates the date that is today.
 *
 * @memberOf date
 * @returns {Date} Returns the today.
 */
export default () => startOf(new Date(), 'D');
