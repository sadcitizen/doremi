import prop from '../object/prop';

// TODO: add description

function pluck(target, key) {
    return target.map(prop(key));
}

export default pluck;