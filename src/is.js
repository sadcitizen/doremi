var is = function(o) {
    if (o instanceof is) return o;
    if (!(this instanceof is)) return new is(o);
    this._wrapped = o;
};