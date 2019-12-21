import React from 'react'
import './Editor.scss'

function Editor({ children }) {
  return (
    <div id="editor-container">
      {children}
      <div id="editor" contentEditable="true"></div>
    </div>
  )
}

export default Editor
