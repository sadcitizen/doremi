module.exports = function json(target) {
    try {
        JSON.parse(target);
    } catch (e) {
        return false;
    }
    return true;
};