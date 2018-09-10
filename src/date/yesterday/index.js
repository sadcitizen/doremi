import add from '../add';
import startOf from '../start-of';
import units from '../../constants/time-units';

/**
 * Creates the date that is today.
 *
 * @category date
 * @returns {Date} Returns the today.
 */
export default () => add(startOf(new Date(), units.day), -1, units.day);
