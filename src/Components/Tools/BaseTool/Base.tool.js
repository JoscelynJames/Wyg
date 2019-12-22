import React from 'react'

class BaseTool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editor: undefined,
      tool: undefined,
      ...props.parentState
    }
  }

  getEditor() {
    const editor = document.getElementById('editable')
    if (!editor) return

    this.setState({ editor })
    editor.addEventListener('mousedown', e => this._onEditorClick(e))
  }

  selectTool(selectedTool) {
    this.props.selectTool(selectedTool)
    this.setState({ selectedTool })
  }

  activateTool(e) {}

  _onEditorClick(e) {
    if (this.state.tool !== this.state.selectedTool) return
    this.activateTool(e)
  }
}

export default BaseTool
