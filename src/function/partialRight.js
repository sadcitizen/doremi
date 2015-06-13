function partialRight(target, ...args) {
    return function (...partialArgs) {
        return target.apply(this, partialArgs.concat(args));
    };
}

export default partialRight;