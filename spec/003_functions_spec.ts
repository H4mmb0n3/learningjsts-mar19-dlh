import * as formatters from "../src/formatters";

describe('functions', () => {
    describe('function literals', () => {
        it('has a couple kinds', () => {
            // Named Function
            expect(add(3, 5)).toBe(8); //can reference before the function
            function add(a: number, b: number): number {
                return a + b;
            }

            //Anonymous Functions
            const subtract = function (a: number, b: number) { return a - b };

            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b; //dont use return also no {}
            expect(multiply(2, 3)).toBe(6);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('YOU ARE INSANE!');
                } else {
                    return a / b;
                }
            }

            expect(divide(9, 3)).toBe(3);
        });

        it('passing arguments to functions', () => {
            //cannot overload functions in JavaScript
            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest paramenters', () => {
            const test = addRest;

            function addRest(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo); //higher order function
            }

            expect(addRest(2, 2)).toBe(4);
            expect(addRest(2, 2, 2)).toBe(6);
            expect(addRest(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });

    describe('higher order functions', () => {
        /* 
       * - takes one or more functions as arguments (i.e. procedural parameters),
       *-  returns a function as its result. 
       */
        it('takes a function as an argument', () => {
            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = formatters.wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
            const wrapInCarots = formatters.wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

            // function wrapInStars(what: string): string {
            //     return `***${what}***`;
            // }
        });
    });

    describe('array methods', () => {

    });
});