const units = {
    'Y': 'year',
    'M': 'month',
    'W': 'week',
    'D': 'day',
    'h': 'hour',
    'm': 'minute',
    's': 'second',
    'ms': 'millisecond'
};

export default unit => units[unit] || unit;
