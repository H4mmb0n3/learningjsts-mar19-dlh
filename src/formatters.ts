export type Transform = (x: string) => string;
export const formatName = function (first: string, last: string, transform?: Transform): string {
    const response = `${last}, ${first}`;
    return transform ? transform(response) : response;
}

export function wrap(chars: string): Transform {
    return (x) => `${chars}${x}${chars}`;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}

//figure out how to make this work in the map?
export function doubler(n: number): number {
    return n * 2;
}

export const PI = 3.1415; 