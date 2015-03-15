import before from './before';

function once(target) {
    return before(target, 2);
}

export default once;