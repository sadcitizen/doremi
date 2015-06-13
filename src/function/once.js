import before from './before';

// TODO: add description

function once(target) {
    return before(target, 2);
}

export default once;