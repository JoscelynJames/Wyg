import React from 'react'
import BaseTool from '../BaseTool/Base.tool'
import Icon from '../../Common/Icon/Icon'
import TextIcon from '../../../assets/icons/text-tool.svg'

class TextTool extends BaseTool {
  constructor(props) {
    super(props)

    this.state = {
      ...this.state,
      tool: 'text',
      active: false
    }
  }

  componentDidMount() {
    this.getEditor()
  }

  activateTool(e) {
    this.setState({ ...this.state, active: true })
  }

  render() {
    return (
      <a onClick={() => this.selectTool('tool')}>
        <Icon img={TextIcon} />
      </a>
    )
  }
}

export default TextTool
