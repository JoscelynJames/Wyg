import React from 'react'
import './Playground.scss'
import Editor from './Components/Editor/Editor'
import Toolbar from './Components/Toolbar/Toolbar'
import ColorPicker from './Components/Tools/ColorPicker/ColorPicker'

function Playground() {
  return (
    <div className="Playground">
      <Editor>
        <Toolbar>
          <ColorPicker />
        </Toolbar>
      </Editor>
    </div>
  )
}

export default Playground
