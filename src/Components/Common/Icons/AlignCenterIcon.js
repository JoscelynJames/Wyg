import React from 'react'

function AlignCenterIcon({
  handleMouseDown,
  style = { margin: '10px auto' },
  fill = '#000',
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
      onMouseDown={e => handleMouseDown(e)}
    >
      <path
        fill={fill}
        d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

export default AlignCenterIcon
