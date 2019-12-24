import React from 'react'

function TextToolIcon({
  selectTool,
  style = { margin: '10px auto' },
  fill = '#fff',
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
      <path fill={fill} d="M0 0h24v24H0z" />
      <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
    </svg>
  )
}

export default TextToolIcon
