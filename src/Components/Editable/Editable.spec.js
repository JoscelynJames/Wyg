import React from 'react'
import { shallow } from 'enzyme'
import Editable from './Editable'

function setup() {
  const props = {}
  const component = shallow(<Editable {...props} />)

  return { component, props }
}

describe('Editable testing suite', () => {
  it('renders Editable', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
