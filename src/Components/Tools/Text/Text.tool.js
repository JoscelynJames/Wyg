import React from 'react'
import BaseTool from '../Base.tool'
import Icon from '../../Common/Icon'
import TextIcon from '../../../assets/icons/text-tool.svg'

class TextTool extends BaseTool {
  componentDidMount() {
    this.getEditor()
  }

  render() {
    return <Icon img={TextIcon} />
  }
}

export default TextTool
