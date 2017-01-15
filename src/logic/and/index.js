export default (...conditions) => {
    if (conditions.length === 0) {
        return false;
    }

    return conditions.every(Boolean)
};
