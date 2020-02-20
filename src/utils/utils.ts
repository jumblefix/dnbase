export const addAll = (...args: number[]) => {
    return args.reduce((c, p) => c + p, 0);
};

export const add = (a: number, b: number) => a + b;

export const reverseStr = (str: string) =>
    str
        .split('')
        .reverse()
        .join('');
