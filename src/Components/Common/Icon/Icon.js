import React from 'react'
import './Icon.scss'

function Icon({ img, selectTool }) {
  return <img className="icon" src={img} onClick={() => selectTool()}></img>
}

export default Icon
