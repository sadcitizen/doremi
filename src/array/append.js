import each from './each';

// TODO: add description

function append(target, source) {
    if (source.length > 0) {
        each(source, x => target.push(x));
    }

    return target;
}

export default append;