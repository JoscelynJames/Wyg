import React from 'react'
import './AlignmentMenu.scss'
import AlignCenterIcon from '../Common/Icons/AlignCenterIcon'
import AlignJustifyIcon from '../Common/Icons/AlignJustifyIcon'
import AlignLeftIcon from '../Common/Icons/AlignLeftIcon'
import AlignRightIcon from '../Common/Icons/AlignRightIcon'
import Overlay from '../Common/Overlay/Overlay'

const overlayStyles = {
  top: '211px',
  right: '120px',
  flexDirection: 'row',
  display: 'flex'
}

function AlignmentMenu({ selectTool }) {
  return (
    <Overlay id="alignment-menu" style={overlayStyles}>
      <button name="justifyCenter" onClick={e => selectTool('justifyCenter', e)}>
        <AlignCenterIcon />
      </button>
      <button name="justifyFull" onClick={e => selectTool('justifyFull', e)}>
        <AlignJustifyIcon />
      </button>
      <button name="justifyLeft" onClick={e => selectTool('justifyLeft', e)}>
        <AlignLeftIcon />
      </button>
      <button name="justifyRight" onClick={e => selectTool('justifyRight', e)}>
        <AlignRightIcon />
      </button>
    </Overlay>
  )
}

export default AlignmentMenu
