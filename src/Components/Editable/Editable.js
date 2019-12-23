import React, { useEffect } from 'react'
import './Editable.scss'

function Editable({ activate, setEditor }) {
  function getEditor() {
    const editor = document.getElementById('editable')
    if (!editor) return
    setEditor(editor)
  }
  // this will run on mount and not ever re-render - thats ok for now
  // https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
  useEffect(() => getEditor(), [])

  return (
    <div
      id="editable"
      contentEditable="true"
      onMouseDown={e => activate(e)}
    ></div>
  )
}

export default Editable
