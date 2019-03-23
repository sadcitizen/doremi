type E = {
    cancel(): void;
}

declare function func<T>(fn: (...params: T) => any, ms: number, context: any = null): (...params: T) => E;

export default func;
