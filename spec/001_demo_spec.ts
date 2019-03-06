describe('writing basic specs', () => {
    it('we can add two numbers together', () => {
        //Given
        const a = 5, b = 4;
        //When
        const answer = a + b;
        //Then
        expect(answer).toBe(9);
    });
});