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

function AlignmentMenu() {
  return (
    <Overlay id="alignment-menu" style={overlayStyles}>
      <button name="align-center">
        <AlignCenterIcon />
      </button>
      <button name="align-justify">
        <AlignJustifyIcon />
      </button>
      <button name="align-left">
        <AlignLeftIcon />
      </button>
      <button name="align-right">
        <AlignRightIcon />
      </button>
    </Overlay>
  )
}

export default AlignmentMenu
