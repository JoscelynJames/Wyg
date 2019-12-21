import React from 'react'

class BaseTool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editor: undefined
    }
  }

  getEditor() {
    const editor = document.getElementById('editor')
    if (editor) this.setState({ editor })
  }

  onEditorClick() {
    // Do something on click here - add html element, highlight shit whatever
  }

  onDelete() {
    // remove elements from the editor
  }

  onDrag() {
    // one day for drag and drop
  }
}

export default BaseTool
