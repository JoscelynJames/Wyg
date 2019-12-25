import React from 'react'
import { shallow } from 'enzyme'
import TextMenu from './TextMenu'

function setup() {
  const props = {
    activeFormats: {
      bold: false,
      italic: false,
      underline: false,
      strikeThrough: false
    }
  }
  const component = shallow(<TextMenu {...props} />)

  return { component, props }
}

describe('TextMenu testing suite', () => {
  it('renders TextMenu', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })
})
