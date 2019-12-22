import React from 'react'
import BaseTool from '../Base.tool'
import Icon from '../../Common/Icon'
import TextIcon from '../../../assets/icons/text-tool.svg'

class TextTool extends BaseTool {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getEditor()
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
