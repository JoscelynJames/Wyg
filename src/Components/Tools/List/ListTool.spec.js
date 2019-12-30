import React from 'react'
import { shallow } from 'enzyme'
import ListTool from './ListTool'

function setup() {
  const props = {}
  const component = shallow(<ListTool {...props} />)

  return { component, props }
}

describe('ListTool App', () => {
  it('renders ListTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
