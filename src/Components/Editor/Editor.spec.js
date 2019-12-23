import React from 'react'
import { shallow } from 'enzyme'
import Editor from './Editor'

function setup() {
  const props = {}
  const component = shallow(<Editor {...props} />)

  return { component, props }
}

describe('Editor testing suite', () => {
  it('renders Editor', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
