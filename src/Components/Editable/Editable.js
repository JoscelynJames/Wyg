import React from 'react'
import './Editable.scss'

function Editable({ children, activate }) {
  return (
    <div id="editable" contentEditable="true" onMouseDown={e => activate(e)}>
      {children}
    </div>
  )
}

export default Editable
