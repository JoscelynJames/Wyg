import React from 'react'
import withTool from '../WithTool/WithTool'
import Icon from '../../Common/Icon/Icon'
import TextIcon from '../../../assets/icons/text-tool.svg'

class TextTool extends React.Component {
  state = {
    tool: 'text',
    active: false,
    selectedTool: this.props.selectedTool,
    editor: this.props.editor
  }

  render() {
    return (
      <Icon
        img={TextIcon}
        toolName="text"
        selectTool={() => this.props.selectTool('text')}
      />
    )
  }
}

export default withTool(TextTool)
