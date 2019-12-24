import React from 'react'

function ColorPickerIcon({
  selectTool,
  style = { margin: 'auto' },
  fill = '#50e3c2',
  width = '24',
  className = '',
  height = '24',
  viewBox = '0 0 24 24'
}) {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseDown={e => selectTool(e)}
    >
      <circle fill={fill} cx="12" cy="12" r="10" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

export default ColorPickerIcon
