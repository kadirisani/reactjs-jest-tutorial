const makeApiCall = ({acctId, observer}) => {
        if (!acctId || !observer) {
            observer.errorOccurred('please pass the variables')
            return
        }
        observer.receiveOrders([{apples: 12, bananas: 12, oranges: 6}])
}

export default {
    makeApiCall
}