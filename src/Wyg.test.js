import React from 'react'
import { shallow } from 'enzyme'
import Wyg from './Wyg'

function setup() {
  const props = {}
  const component = shallow(<Wyg {...props} />)

  return { component, props }
}

describe('Wyg App', () => {
  it('renders Wyg', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
