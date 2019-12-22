import React from 'react'
import './Editor.scss'
import Toolbar from '../Toolbar/Toolbar'
// tools
import TextTool from '../Tools/Text/Text.tool'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTool: 'text'
    }
  }

  selectTool(selectedTool) {
    if (this.state.selectedTool === selectedTool) return
    this.setState({ selectedTool })
  }

  render() {
    return (
      <div id="editor-container">
        <Toolbar>
          <TextTool
            selectTool={tool => this.selectTool(tool)}
            selectedTool={this.state.selectedTool}
          />
        </Toolbar>
        <div id="editor" contentEditable="true"></div>
      </div>
    )
  }
}

export default Editor
