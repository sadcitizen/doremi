const units = {
    'Y': 'years',
    'M': 'months',
    'D': 'days',
    'h': 'hours',
    'm': 'minutes',
    's': 'seconds',
    'ms': 'milliseconds'
};

export default unit => units[unit] || unit;
