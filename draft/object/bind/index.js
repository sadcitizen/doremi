import isFunction from '../../func/is-function';

/**
 * @param {Object} target
 * @param {...string} methods
 */
export default function (target, ...methods) {
    methods.forEach(method => {
        if (target[method] && isFunction(target[method])) {
            target[method] = target[method].bind(target);
        }
    });
}