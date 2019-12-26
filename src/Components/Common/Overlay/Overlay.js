import React from 'react'
import './Overlay.scss'

function Overlay({ children, style }) {
  return (
    <div style={style} className="overlay">
      {children}
    </div>
  )
}

export default Overlay
