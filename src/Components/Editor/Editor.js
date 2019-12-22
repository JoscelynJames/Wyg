import React from 'react'
import './Editor.scss'
import Toolbar from '../Toolbar/Toolbar'
// tools
import TextTool from '../Tools/Text/Text.tool'
import Editable from '../Editable/Editable'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTool: 'text',
      active: false
    }
  }

  selectTool(selectedTool) {
    if (this.state.selectedTool === selectedTool) return
    this.setState({ selectedTool })
  }

  activateEditor(e) {
    this.setState({ ...this.state, active: true })
  }

  render() {
    return (
      <div id="editor-container">
        <Toolbar>
          <TextTool
            selectTool={tool => this.selectTool(tool)}
            parentState={this.state}
          />
        </Toolbar>
        <Editable activate={e => this.activateEditor(e)} />
      </div>
    )
  }
}

export default Editor
