module.exports = {
    es6: /\$\{([^${}]+?)\}/g,
    underscore: /<\%\=([^<%=>]+?)\%>/g,
    mustache: /\{\{([^\}]+)\}\}/g
};