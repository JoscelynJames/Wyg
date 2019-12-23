import React from 'react'
import { shallow } from 'enzyme'
import withTool from './WithTool'

class MockTask extends React.Component {
  render() {
    return <p>Im a tool</p>
  }
}

function setup() {
  const props = {}
  const MockWithTool = withTool(MockTask)
  const component = shallow(<MockWithTool {...props} />)

  return { component, props }
}

describe('withTool testing suite', () => {
  it('renders withTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })

  it('#activateTool', () => {
    const { component } = setup()
    expect(component.instance().state.active).toEqual(false)
    component.instance().activateTool()
    expect(component.instance().state.active).toEqual(true)
  })
})
