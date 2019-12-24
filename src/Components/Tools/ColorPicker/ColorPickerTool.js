import React from 'react'
import './ColorPickerTool.scss'
import withTool from '../WithTool/WithTool'
import ColorPickerIcon from '../../Common/Icons/ColorPickerIcon'

function ColorPickerTool({ currentColor, selectTool }) {
  return (
    <ColorPickerIcon
      fill={currentColor}
      selectTool={e => selectTool('color', e)}
    />
  )
}

export default withTool(ColorPickerTool)
