declare function func<T>(fn: (...param: T) => any): (...param: T) => any;

export default func;
