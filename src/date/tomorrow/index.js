import units from '../../constants/time-units';
import startOf from '../start-of';
import add from '../add';

/**
 * Creates the date that is tomorrow.
 *
 * @category date
 * @returns {Date} Returns the tomorrow.
 */
export default () => add(startOf(new Date(), units.day), 1, units.day);
