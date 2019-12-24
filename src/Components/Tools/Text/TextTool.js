import React from 'react'
import withTool from '../WithTool/WithTool'
import TextToolIcon from '../../Common/Icons/TextToolIcon'

class TextTool extends React.Component {
  state = {
    tool: 'text',
    active: false,
    selectedTool: this.props.selectedTool,
    editor: this.props.editor
  }

  render() {
    return <TextToolIcon selectTool={e => this.props.selectTool('text', e)} />
  }
}

export default withTool(TextTool)
