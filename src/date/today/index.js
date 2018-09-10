import startOf from '../start-of';

/**
 * Creates the date that is today.
 *
 * @category date
 * @returns {Date} Returns the today.
 */
export default () => startOf(new Date(), 'D');
