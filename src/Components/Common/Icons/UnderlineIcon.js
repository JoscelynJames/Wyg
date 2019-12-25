import React from 'react'

function UnderlineIcon({
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={fill}
        d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"
      />
    </svg>
  )
}

export default UnderlineIcon
