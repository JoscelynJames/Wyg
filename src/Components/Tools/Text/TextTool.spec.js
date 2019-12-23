import React from 'react'
import { shallow } from 'enzyme'
import TextTool from './TextTool'

function setup() {
  const props = {}
  const component = shallow(<TextTool {...props} />)

  return { component, props }
}

describe('TextTool testing suite', () => {
  it('renders TextTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
