import React from 'react'

function ArrowDownIcon({
  handleMouseDown,
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
      onMouseDown={e => handleMouseDown(e)}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  )
}

export default ArrowDownIcon
