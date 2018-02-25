import identity from '../../func/identity'
import sum from '../sum';

export default (value, iteratee = identity) => sum(value, iteratee) / value.length;
