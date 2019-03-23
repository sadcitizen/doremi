declare function func<T, S, W>(fn: (...firstParams: S, ...secondParams: T) => W, ...params: T): (...param: S) => W;

export default func;
