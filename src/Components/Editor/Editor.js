import React from 'react'
import './Editor.scss'
import { SketchPicker } from 'react-color'
import Toolbar from '../Toolbar/Toolbar'
import Editable from '../Editable/Editable'
// tools
import TextTool from '../Tools/Text/TextTool'
import ColorPickerTool from '../Tools/ColorPicker/ColorPickerTool'

class Editor extends React.Component {
  state = {
    selectedTool: 'text',
    active: false,
    editor: undefined,
    showColorPicker: false,
    currentColor: '#50E3C2'
  }

  selectTool(selectedTool, event) {
    event.preventDefault() // mantain the highlighted text

    this.setState(prevState => ({
      ...prevState,
      selectedTool,
      ...(selectedTool === 'color' && {
        showColorPicker: !prevState.showColorPicker
      })
    }))
  }

  activateEditor(e) {
    this.setState({ ...this.state, active: true })
  }

  setEditor(editor) {
    this.setState({ ...this.state, editor })
  }

  handleChange(color, event) {
    event.preventDefault() // mantain the highlighted text
    document.execCommand('foreColor', true, color.hex)

    this.setState({ currentColor: color.hex })
  }

  render() {
    return (
      <div id="editor-container">
        {this.state.showColorPicker ? (
          <SketchPicker
            color={this.state.currentColor}
            onChange={(color, event) => this.handleChange(color, event)}
          />
        ) : null}
        <Toolbar>
          <ColorPickerTool
            editor={this.state.editor}
            selectTool={(tool, e) => this.selectTool(tool, e)}
            currentColor={this.state.currentColor}
          />
          <TextTool
            selectTool={(tool, e) => this.selectTool(tool, e)}
            selectedTool={this.state.selectedTool}
            editor={this.state.editor}
          />
        </Toolbar>
        <Editable
          activate={e => this.activateEditor(e)}
          setEditor={editor => this.setEditor(editor)}
        />
      </div>
    )
  }
}

export default Editor
