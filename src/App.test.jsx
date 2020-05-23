import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('when App is loaded', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('shows text hello', () => {
        expect(wrapper.find('h1').text()).toEqual('Hello')
    })
})