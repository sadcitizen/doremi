module.exports = function ok(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed.');
    }
};