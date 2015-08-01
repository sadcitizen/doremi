// TODO: add description

function delay(target, ms) {
    return function () {
        var args = arguments;
        setTimeout(() => target.apply(null, args), ms);
    };
}

export default delay;