import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

function setup() {
  const props = {}
  const component = shallow(<Toolbar {...props} />)

  return { component, props }
}

describe('Toolbar testing suite', () => {
  it('renders Toolbar', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
