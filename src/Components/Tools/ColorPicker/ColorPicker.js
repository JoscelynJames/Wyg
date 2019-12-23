import React from 'react'
import { SketchPicker } from 'react-color'
import './ColorPicker.scss'

class ColorPickerTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showColorPicker: false, currentColor: '#50E3C2' }
  }

  toggleColorPicker(newStatus) {
    this.setState({ showColorPicker: newStatus })
  }

  handleChange(color, event) {
    this.setState({ currentColor: color.hex })
  }

  render() {
    return (
      <div id="color-picker">
        <div
          id="color-swatch"
          style={{ backgroundColor: this.state.currentColor }}
          onClick={() => this.toggleColorPicker(!this.state.showColorPicker)}
        ></div>
        {this.state.showColorPicker ? (
          <SketchPicker
            color={this.state.currentColor}
            onChange={(color, event) => this.handleChange(color, event)}
          />
        ) : null}
      </div>
    )
  }
}

export default ColorPickerTool
