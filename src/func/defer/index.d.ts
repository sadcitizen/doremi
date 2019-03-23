declare function func<T>(fn: (...params: T) => any, context: any = null): (...params: T) => any;

export default func;
