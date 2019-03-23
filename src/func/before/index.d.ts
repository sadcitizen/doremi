declare function func<T>(fn: (...param: T) => any, times: number): (...param: T) => any;

export default func;
