import React from 'react'
import { shallow } from 'enzyme'
import AlignmentMenu from './AlignmentMenu'

function setup() {
  const props = {}
  const component = shallow(<AlignmentMenu {...props} />)

  return { component, props }
}

describe('AlignmentMenu testing suite', () => {
  it('renders AlignmentMenu', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
