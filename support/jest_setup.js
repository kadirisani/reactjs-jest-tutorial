import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import jsdom from 'jsdom'
const {JSDOM} = jsdom

const dom = new JSDOM('<!doctype><html><body></body></html>')

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator
global.window.Date = Date
global.window.matchMedia = dom.window.matchMedia || function () {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    }
}

global.window.scrollTo = () => {}

Object.values = (obj) => Object.keys(obj).map(key => obj[key])

configure({adapter: new Adapter(), disableLifeCycleMethods: true})

jest.setTimeout(12000) // 12 second timeout