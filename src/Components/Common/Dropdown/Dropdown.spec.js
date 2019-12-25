import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './Dropdown'

function setup() {
  const props = {
    options: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 5 }],
    name: 'testing-dropdown',
    style: { 'background-color': 'red' },
    onChange: () => {}
  }
  const component = shallow(<Dropdown {...props} />)

  return { component, props }
}

describe('Dropdown testing suite', () => {
  it('renders Dropdown', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
