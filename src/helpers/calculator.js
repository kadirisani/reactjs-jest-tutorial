const calculator = (numbers, methodName) => {
    if (!numbers || numbers.length === 0) return null
    let result = null
    switch(methodName){
        case 'add':
            result = numbers.reduce((a, b) => {
                return a + b
            }, 0)
            break
        case 'multiply':
            result = numbers.reduce((a, b) => {
                return a  * b
            }, 1)
            break
        default:
            result = null
    }
    return result 
}

export default calculator