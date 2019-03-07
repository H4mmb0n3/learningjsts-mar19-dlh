describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            interface Food {
                name: string;
                calories: number;
            }

            let x: number | string = 12;

            expect(x).toBe(12);

            x = 13;

            expect(x).toBe(13);

            let y;

            y = 18;
            expect(y).toBe(18);

            y = 'Tacos';

            expect(y).toBe('Tacos');

            let z: number | string | Food; //This is a union type. declare it then check z. to see differences
        });

        it('using the const keyword', () => {
            const MIN_AGE = 13;

            expect(MIN_AGE).toBe(13);

            const FAVORITE_NUMBERS = [1, 2, 3];

            expect(FAVORITE_NUMBERS[0]).toBe(1);

            FAVORITE_NUMBERS[0] = 5;

            expect(FAVORITE_NUMBERS[0]).toBe(5);


            const ACTOR = {
                name: 'Perter Mayhew',
                role: 'Chewbacca'
            };

            expect(ACTOR.role).toBe('Chewbacca');

            ACTOR.role = 'Chewie';

            expect(ACTOR.role).toBe('Chewie');
        });

        it('still has var but it is bad and you should feel bad if you use it', () => {

            //This is bad. all vars are function scoped
            const AGE = 22;
            if (AGE >= 21) {
                var oldEnough = true;
            }
            expect(oldEnough).toBe(true);
        });
    });

    describe('literals', () => {
        it('has numeric literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_001_800; //_ is a comma
            let hexNumber = 0xff;
            let binary = 0b101010;
            let octal = 0o744;
        });

        it('has string literals', () => {
            let firstString = 'hello';
            expect(firstString).toBe("hello");

            let story = 'He said "oh my gosh"';
            let author = "Flanner O'Connel";

            expect("hi").toBe(`hi`);

            let lifestory = `It all happened so quickly.
            
            There I was in a cozy room, then I wasn't... Weird
            
            the end.`;

            let name = "Steve", age = 29;

            let info = `His name is ${name} and his age is ${age}.`;
            //console.log(info);
        });

        it('has array literals', () => {
            const things = [];
            things[0] = 'hello';
            things[1] = 42;
            things[666] = 'you are evil!';
            things[777] = ['Dog', 'Cat', 'Turtle'];
            things[999] = things;

            expect(things[2]).toBeUndefined();

            const luckyNumber: Array<number | string> = [];
            const friends: (number | string)[] = [];
            friends[0] = 'Jeff';
            friends[1] = 'Leroy';
            friends[2] = 42;

        });

        describe('tuples', () => {
            it('making the case', () => {
                // Not using tuples
                function add(a: number, b: number): number {
                    return a + b;
                }

                interface NameFormattingResult { fullName: string, numberOfLetters: number };
                function formatName(first: string, last: string): NameFormattingResult {
                    const fullName = `${last}, ${first}`;

                    return {
                        fullName: fullName,
                        numberOfLetters: fullName.length
                    }
                }

                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.numberOfLetters).toBe(9);

            });

            it('the syntax', () => {
                let warren: [string, string, number];
                warren = ['Warren', 'Ellis', 56];

                // let first = warren[0];
                // let age = warren[2];

                let [first, , age] = warren; // like above but differnt way to write it.

                expect(first).toBe('Warren');
                expect(age).toBe(56);
            });

            it('using a tuple', () => {
                function formatNameTuple(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;

                    return [fullName, fullName.length];
                }

                const [formattedName, nameLength] = formatNameTuple('Neil', 'Gaiman');

                console.log(`"${formattedName}" is ${nameLength} characters long`);

                expect(formattedName).toBe('Gaiman, Neil');
                expect(nameLength).toBe(12);
            });

            it('using destructuring on an array', () => {
                const friends = ['Reggie', 'Susan', 'Neil'];
                const [first, , last] = friends;

                expect(first).toBe('Reggie');

                const [firstFriend, ...restOfMyFriends] = friends;
                console.log(`First Friend: ${firstFriend}`);
                console.log(`rest ${restOfMyFriends}`);
                expect(firstFriend).toBe('Reggie');
                expect(restOfMyFriends).toEqual(['Susan', 'Neil']);
            });

            it('using the spread operator', () => {
                const friends = ['Susan', 'Neil'];
                const newFriends = ['Reggie', ...friends];
                console.log(newFriends);
                expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']);
            });
        });
    });
});