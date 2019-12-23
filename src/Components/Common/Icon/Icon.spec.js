import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

function setup() {
  const props = { src: 'https://random.cat/view/240' }
  const component = shallow(<Icon {...props} />)

  return { component, props }
}

describe('Icon testing suite', () => {
  it('renders Icon', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
