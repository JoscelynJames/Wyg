import React from 'react'
import { shallow } from 'enzyme'
import ColorPickerTool from './ColorPickerTool'
import { JSDOM } from 'jsdom'

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

function setup() {
  const props = {}
  // for component wrapped in a higher order component follow this convention
  // Github issue - https://github.com/airbnb/enzyme/issues/539
  const component = shallow(<ColorPickerTool {...props} />)
    .first()
    .shallow()

  return { component, props }
}

describe('ColorPickerTool testing suite', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window

  it('renders ColorPickerTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })

  it('#toggleColorPicker', () => {
    const { component } = setup()
    expect(component.instance().state.showColorPicker).toEqual(false)

    component.instance().toggleColorPicker(true)
    expect(component.instance().state.showColorPicker).toEqual(true)
  })

  // we need to mock the DOM in order to test this function - this will require an eject
  // https://github.com/facebook/jest/issues/2297 - create react app does not support this
  // it('#handleChange', () => {
  //   const { component } = setup()
  //   expect(component.instance().state.currentColor).toEqual('#50E3C2')
  //   const event = { preventDefault: () => {} } // mock event
  //   component.instance().handleChange({ hex: '#EEEEEE' }, event)
  //   expect(component.instance().state.showColorPicker).toEqual('#EEEEEE')
  // })
})
