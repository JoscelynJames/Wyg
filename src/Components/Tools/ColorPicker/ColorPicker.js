import React from 'react'
import { SketchPicker } from 'react-color'
import './ColorPicker.scss'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showColorPicker: false }
  }

  toggleColorPicker(newStatus) {
    this.setState({ showColorPicker: newStatus })
  }

  render() {
    return (
      <div id="color-picker">
        <div
          id="color-swatch"
          onClick={() => this.toggleColorPicker(!this.state.showColorPicker)}
        ></div>
        {this.state.showColorPicker ? <SketchPicker /> : null}
      </div>
    )
  }
}

export default ColorPicker
