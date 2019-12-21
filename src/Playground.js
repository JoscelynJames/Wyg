import React from 'react'
import './Playground.scss'
import Editor from './Components/Editor/Editor'
import Toolbar from './Components/Toolbar/Toolbar'

function Playground() {
  return (
    <div className="Playground">
      <Editor>
        <Toolbar />
      </Editor>
    </div>
  )
}

export default Playground
