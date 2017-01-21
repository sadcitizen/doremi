import distinct from '../distinct';
import identity from '../../func/identity';

export default function (target, source = [], iteratee = identity) {
    return distinct(target.concat(source), iteratee);
}
