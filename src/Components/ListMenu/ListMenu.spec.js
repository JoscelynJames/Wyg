import React from 'react'
import { shallow } from 'enzyme'
import ListMenu from './ListMenu'

function setup() {
  const props = {}
  const component = shallow(<ListMenu {...props} />)

  return { component, props }
}

describe('ListMenu App', () => {
  it('renders ListMenu', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
