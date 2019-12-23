import React from 'react'
import './Editor.scss'
import Toolbar from '../Toolbar/Toolbar'
import Editable from '../Editable/Editable'
// tools
import TextTool from '../Tools/Text/Text'
import ColorPickerTool from '../Tools/ColorPicker/ColorPicker'

class Editor extends React.Component {
  state = {
    selectedTool: 'text',
    active: false,
    editor: undefined
  }

  selectTool(selectedTool) {
    if (this.state.selectedTool === selectedTool) return
    this.setState({ ...this.state, selectedTool })
  }

  activateEditor(e) {
    this.setState({ ...this.state, active: true })
  }

  setEditor(editor) {
    this.setState({ ...this.state, editor })
  }

  render() {
    return (
      <div id="editor-container">
        <Toolbar>
          <ColorPickerTool />
          <TextTool
            selectTool={tool => this.selectTool(tool)}
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
