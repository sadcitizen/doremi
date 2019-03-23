declare function func<T, S, W>(fn: (...firstParams: T, ...secondParams: S) => W, ...params: T): (...param: S) => W;

export default func;
