module.exports = function equal(target, other) {
    return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
};