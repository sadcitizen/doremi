declare function func<T, S>(fn: (...param: T) => S, resolver: (param: Array<T>) => any): (...param: T) => S;

export default func;
