import React from 'react'
import { SketchPicker } from 'react-color'
import './ColorPickerTool.scss'
import withTool from '../WithTool/WithTool'

class ColorPickerTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showColorPicker: false,
      currentColor: '#50E3C2'
    }
  }

  toggleColorPicker(newStatus) {
    this.setState({ showColorPicker: newStatus })
  }

  async handleChange(color, event) {
    // we want to make sure that the text stays highlighted on click
    event.preventDefault()
    // this will change just the color of the text
    document.execCommand('foreColor', true, color.hex)

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
        <SketchPicker
          color={this.state.currentColor}
          onChange={(color, event) => this.handleChange(color, event)}
        />
      </div>
    )
  }
}

export default withTool(ColorPickerTool)
