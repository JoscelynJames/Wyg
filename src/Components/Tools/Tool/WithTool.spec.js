import React from 'react'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import WithTool from './WithTool'

class MockTask extends React.Component {
  render() {
    return <p>Im a tool</p>
  }
}

function setup() {
  const props = {}
  const MockWithTool = WithTool(MockTask)
  const component = shallow(<MockWithTool />)
    .first()
    .shallow()

  return { component, props }
}

describe('withTool testing suite', () => {
  it('renders withTool', () => {
    const { component } = setup()
    expect(component).toBeDefined()
  })

  it('#selectTool', () => {
    const { component } = setup()
    expect(component.state.selectedTool).toEqual(undefined)

    component.instance().props.selectTool('color')
    expect(component.state.selectedTool).toEqual('color')
  })
})
