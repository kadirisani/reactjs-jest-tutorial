import calculator from './calculator'

describe('calculator', () => {
    describe('when no numbers are provided', () => {
        it('returns null', () => {
            expect(calculator(null, 'add')).toEqual(null)
        });
        
    });
    
    describe('when add method is called', () => {
        it('returns the sum of the given numbers', () => {
            expect(calculator([2,3], 'add')).toEqual(5)
        });
    });

    describe('when multiply method is called', () => {
        it('returns the multiplied value of the number', () => {
            expect(calculator([2,3], 'multiply')).toEqual(6)
        });
    });
    
});
