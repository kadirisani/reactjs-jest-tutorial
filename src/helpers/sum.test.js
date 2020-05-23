import sum from './sum'

describe('when sum is called', () => {
    it('returns sum of numbers', () => {
        expect(sum(2,4)).toEqual(6)
    })
})