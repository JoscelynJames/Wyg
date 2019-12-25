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

  it('#activateEditor', () => {
    const { component } = setup()
    expect(component.instance().state.active).toEqual(false)

    component.instance().activateEditor()
    expect(component.instance().state.active).toEqual(true)
  })

  it('#setEditor', () => {
    const { component } = setup()
    expect(component.instance().state.editor).toEqual(undefined)

    component.instance().setEditor({ woo: 'im an editor' })
    expect(component.instance().state.editor).toEqual({ woo: 'im an editor' })
  })

  it('#selectTool', () => {
    const { component } = setup()
    expect(component.instance().state.selectedTool).toEqual('text')

    component
      .instance()
      .selectTool('cool new tool', { preventDefault: () => {} })
    expect(component.instance().state.selectedTool).toEqual('cool new tool')
  })

  it('should open text menu if text is the selected tool', () => {
    const { component } = setup()
    expect(component.instance().state.showTextMenu).toEqual(false)

    component.instance().selectTool('text', { preventDefault: () => {} })
    expect(component.instance().state.showTextMenu).toEqual(true)
    expect(component.instance().state.selectedTool).toEqual('text')
  })

  it('should open the color picker if color is the selected tool', () => {
    const { component } = setup()
    expect(component.instance().state.showColorPicker).toEqual(false)

    component.instance().selectTool('color', { preventDefault: () => {} })
    expect(component.instance().state.showColorPicker).toEqual(true)
    expect(component.instance().state.selectedTool).toEqual('color')
  })
})
