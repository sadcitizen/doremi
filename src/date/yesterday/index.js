import add from '../add';
import startOf from '../start-of';
import units from '../../constants/time-units';

/**
 * Creates the date that is yesterday.
 *
 * @memberOf date
 * @returns {Date} Returns the yesterday.
 */
export default () => add(startOf(new Date(), units.day), -1, units.day);
