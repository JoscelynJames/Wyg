import React from 'react'
import { shallow } from 'enzyme'
import ColorPickerTool from './ColorPickerTool'

function setup() {
  const props = {}
  const component = shallow(<ColorPickerTool {...props} />)

  return { component, props }
}

describe('ColorPickerTool testing suite', () => {
  it('renders ColorPickerTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
