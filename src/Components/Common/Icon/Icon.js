import React from 'react'
import './Icon.scss'

function Icon({ img, selectTool, toolName }) {
  return (
    <img
      className="icon"
      alt={toolName}
      src={img}
      onClick={() => selectTool()}
    ></img>
  )
}

export default Icon
