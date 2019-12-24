import React from 'react'
import { shallow } from 'enzyme'
import ColorPickerTool from './ColorPickerTool'

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
  it('renders ColorPickerTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
