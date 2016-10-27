/**
 * [description]
 * @param  {Function} fn [description]
 * @return {[type]}      [description]
 */
export default fn => (...args) => fn(...args.reverse());
