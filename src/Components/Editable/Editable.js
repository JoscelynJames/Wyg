import React, { useEffect } from 'react'
import './Editable.scss'

function getEditor(setEditor) {
  const editor = document.getElementById('editable')
  if (!editor) return
  setEditor(editor)
}

function Editable({ children, activate, setEditor }) {
  useEffect(() => getEditor(setEditor), [])

  return (
    <div id="editable" contentEditable="true" onMouseDown={e => activate(e)}>
      {children}
    </div>
  )
}

export default Editable
