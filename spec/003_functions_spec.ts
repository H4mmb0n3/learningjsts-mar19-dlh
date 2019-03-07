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
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('taking a look at every member of an array', () => {
            numbers.forEach((number) => console.log(`Numbers array: ${number}`));
        });

        describe('methods that return new arrays', () => {
            it('has a filter', () => {
                const evens = numbers.filter(formatters.isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });

            it('map', () => {


                const doubled = numbers.map(n => n * 2);

                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });

            it('do a practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];

                const lowMileageVehicles = vehicles
                    .filter(veh => veh.mileage < 100_000)
                    .map(n => n.makeAndModel);

                expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);
            });

            describe('methods that produce a single (scalar) value', () => {
                it('has methods that check the membership of the arrary', () => {
                    expect(numbers.some(n => n > 8)).toBe(true);
                    expect(numbers.every(formatters.isEven)).toBe(false);
                });

                it('has reduce', () => {
                    expect(numbers.reduce((prev, next) => prev + next)).toBe(45);
                    expect(numbers.reduce((prev, next) => prev + next, 55)).toBe(100);
                });
            });
        });
    });
});