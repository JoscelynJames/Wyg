import React from 'react'

function StrikethroughIcon({
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
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={fill}
        d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
      />
    </svg>
  )
}

export default StrikethroughIcon
