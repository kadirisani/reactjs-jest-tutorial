import React from 'react'
import getAccountOrders from './get_account_orders'

describe('getAccountOrders', () => {
    let observerSpy
    beforeEach(() => {
        observerSpy = {
            receiveOrders: jest.fn(),
            errorOccurred: jest.fn()
        }
    })
    describe('when account order is passed in', () => {
        beforeEach(() => {
            getAccountOrders.makeApiCall({acctId: 1, observer: observerSpy})
        })
        it('should return the order', () => {
            expect(observerSpy.receiveOrders).toHaveBeenCalled()
        });
    });

    describe('when no account order is passed in', () => {
        beforeEach(() => {
            getAccountOrders.makeApiCall({observer: observerSpy})
        })
        it('should return the order', () => {
            expect(observerSpy.errorOccurred).toHaveBeenCalled()
        });
    });
    
});
