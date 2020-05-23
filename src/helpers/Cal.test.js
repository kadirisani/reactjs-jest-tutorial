import Cal from './Cal'

describe('Cal', () => {
    let calculator, result
    beforeEach(() => {
        calculator = new Cal()
    })
    describe('when numbers passed to add method', () => {
        it('returns the sum of those numbers', () => {
            expect(calculator.add(2,4)).toEqual(6)           
        });
        
    });

    describe('when numbers passed to multiply method', () => {
        it('returns multiplied value of those numbers', () => {
            expect(calculator.multiply(2,5)).toEqual(10)
        });
        
    });
    
    
});
