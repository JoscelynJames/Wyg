import React from 'react'

function WithTool(WrappedComponent) {
  return class extends React.Component {
    state = {
      editor: undefined,
      tool: undefined,
      selectedTool: undefined,
      active: false
    }

    componentDidUpdate() {
      if (this.state.editor) this.addEventsToEditor()
    }

    addEventsToEditor() {
      this.state.editor.addEventListener('mousedown', e =>
        this._onEditorClick(e)
      )
    }

    activateTool(e) {}

    _onEditorClick(e) {
      if (this.state.tool !== this.state.selectedTool) return
      this.activateTool(e)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default WithTool
