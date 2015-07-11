// TODO: add description

function append(target, source) {
    target.push.apply(target, source);
    return target;
}

export default append;