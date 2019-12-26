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
      <button name="align-center" onClick={e => selectTool('align-center', e)}>
        <AlignCenterIcon />
      </button>
      <button name="align-justify" onClick={e => selectTool('align-justify', e)}>
        <AlignJustifyIcon />
      </button>
      <button name="align-left" onClick={e => selectTool('align-left', e)}>
        <AlignLeftIcon />
      </button>
      <button name="align-right" onClick={e => selectTool('align-right', e)}>
        <AlignRightIcon />
      </button>
    </Overlay>
  )
}

export default AlignmentMenu
