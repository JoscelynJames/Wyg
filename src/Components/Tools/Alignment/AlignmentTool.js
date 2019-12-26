import React from 'react'
import './AlignmentTool.scss'
import withTool from '../WithTool/WithTool'
import AlignCenterIcon from '../../Common/Icons/AlignCenterIcon'
import AlignJustifyIcon from '../../Common/Icons/AlignJustifyIcon'
import AlignLeftIcon from '../../Common/Icons/AlignLeftIcon'
import AlignRightIcon from '../../Common/Icons/AlignRightIcon'

function AlignmentTool({ selectTool, icon }) {
  let tool
  const getIcon = () => {
    switch (icon) {
      case 'align-center':
        return (
          <AlignCenterIcon selectTool={e => selectTool('align-center', e)} />
        )
      case 'align-justify':
        return (
          <AlignJustifyIcon selectTool={e => selectTool('align-justify', e)} />
        )
      case 'align-right':
        return <AlignRightIcon selectTool={e => selectTool('align-right', e)} />
      default:
        // align-left
        return <AlignLeftIcon selectTool={e => selectTool('align-left', e)} />
    }
  }

  return <button onClick={e => selectTool(icon, e)}>{getIcon()}</button>
}

export default withTool(AlignmentTool)
