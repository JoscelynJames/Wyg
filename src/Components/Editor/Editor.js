import React from 'react'
import './Editor.scss'
import Toolbar from '../Toolbar/Toolbar'
// tools
import TextTool from '../Tools/Text/Text.tool'

function Editor() {
  return (
    <div id="editor-container">
      <Toolbar>
        {/* take in tools here */}
        {/* <ColorPicker /> */}
        <TextTool />
      </Toolbar>
      <div id="editor" contentEditable="true"></div>
    </div>
  )
}

export default Editor
