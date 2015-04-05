import prop from '../object/prop';

function pluck(target, key) {
    return target.map(prop(key));
}

export default pluck;