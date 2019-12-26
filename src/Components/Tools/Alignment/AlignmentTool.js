import React from 'react'
import './AlignmentTool.scss'
import withTool from '../WithTool/WithTool'
import AlignCenterIcon from '../../Common/Icons/AlignCenterIcon'
import AlignJustifyIcon from '../../Common/Icons/AlignJustifyIcon'
import AlignLeftIcon from '../../Common/Icons/AlignLeftIcon'
import AlignRightIcon from '../../Common/Icons/AlignRightIcon'

function AlignmentTool({ selectTool, activeFormats, currentAlignmentTool }) {
  const getIcon = () => {
    if (activeFormats.justifyCenter || currentAlignmentTool === 'justifyCenter') {
      currentAlignmentTool = 'justifyCenter'
      return <AlignCenterIcon selectTool={e => selectTool('justifyCenter', e)} />
    } else if (activeFormats.justifyFull || currentAlignmentTool === 'justifyFull') {
      currentAlignmentTool = 'justifyFull'
      return <AlignJustifyIcon selectTool={e => selectTool('justifyFull', e)} />
    } else if (activeFormats.justifyRight || currentAlignmentTool === 'justifyRight') {
      currentAlignmentTool = 'justifyRight'
      return <AlignRightIcon selectTool={e => selectTool('justifyRight', e)} />
    } else {
      currentAlignmentTool = 'justifyLeft'
      return <AlignLeftIcon selectTool={e => selectTool('justifyLeft', e)} />
    }

  }

  return <button onClick={e => selectTool(currentAlignmentTool, e)}>{getIcon()}</button>
}

export default withTool(AlignmentTool)
