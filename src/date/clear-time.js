/**
 * Sets the hours, minutes, seconds, and milliseconds to zero.
 *
 * @param {Date} target The date to clear.
 * @return {Date} The mutated date.
 *
 * @example
 * const date = new Date(2016, 0, 1, 10, 26, 38, 100);
 * clearTime(date);
 * console.log(date.toUTCString());
 * // => "Thu, 31 Dec 2015 19:00:00 GMT"
 */
function clearTime(target) {
    target.setHours(0, 0, 0, 0);
    return target;
}

export default clearTime;
