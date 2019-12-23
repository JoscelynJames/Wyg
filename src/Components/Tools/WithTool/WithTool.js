import React from 'react'

function withTool(WrappedComponent) {
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
        this.onEditorClick(e)
      )
    }

    activateTool() {
      this.setState({ ...this.state, active: true })
    }

    onEditorClick(e) {
      if (this.state.tool !== this.state.selectedTool) return
      this.activateTool()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withTool
