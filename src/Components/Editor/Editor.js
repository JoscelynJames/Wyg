import React from 'react'
import './Editor.scss'
//components
import { SketchPicker } from 'react-color'
import Toolbar from '../Toolbar/Toolbar'
import Editable from '../Editable/Editable'
import TextMenu from '../TextMenu/TextMenu'
import AlignmentMenu from '../AlignmentMenu/AlignmentMenu'
// tools
import TextTool from '../Tools/Text/TextTool'
import ColorPickerTool from '../Tools/ColorPicker/ColorPickerTool'
import AlignmentTool from '../Tools/Alignment/AlignmentTool'

class Editor extends React.Component {
  state = {
    selectedTool: 'text',
    currentAlignmentTool: 'justifyLeft',
    active: false,
    editor: undefined,
    showColorPicker: false,
    showTextMenu: false,
    showAlignmentMenu: false,
    currentColor: '#50E3C2',
    activeFormats: {
      bold: false,
      italic: false,
      underline: false,
      strikeThrough: false,
      hiliteColor: false,
      justifyCenter: false,
      justifyFull: false,
      justifyRight: false,
      justifyLeft: false
    }
  }

  selectTool(selectedTool, event) {
    event.preventDefault() // mantain the highlighted text
    if (!selectedTool) return

    if (selectedTool.includes('justify')) {
      this.formatText(selectedTool, undefined, event)
    }

    this.setState(prevState => ({
      ...prevState,
      selectedTool,
      ...(selectedTool === 'color' && {
        showColorPicker: !prevState.showColorPicker
      }),
      ...(selectedTool === 'text' && {
        showTextMenu: !prevState.showTextMenu
      }),
      ...(selectedTool.includes('justify') && {
        showAlignmentMenu: !prevState.showAlignmentMenu,
        currentAlignmentTool: selectedTool
      })
    }))
  }

  activateEditor(e) {
    this.setState({ ...this.state, active: true })
  }

  setEditor(editor) {
    this.setState({ ...this.state, editor })
  }

  handleChange(color, event) {
    event.preventDefault() // mantain the highlighted text
    document.execCommand('foreColor', true, color.hex)

    this.setState({ currentColor: color.hex })
  }

  formatText(property, value, event) {
    event.preventDefault() // mantain the highlighted text
    if (property === 'hiliteColor') value = this.getHighlightColor()
    document.execCommand(property, true, value)

    this.setState(prevState => ({
      ...prevState,
      activeFormats: {
        ...prevState.activeFormats,
        [property]: !prevState.activeFormats[property]
      }
    }))
  }

  getHighlightColor() {
    return !this.state.activeFormats.hiliteColor
      ? this.state.currentColor
      : '#fff'
  }

  render() {
    return (
      <div id="editor-container">
        {this.state.showColorPicker ? (
          <SketchPicker
            color={this.state.currentColor}
            onChange={(color, e) => this.handleChange(color, e)}
          />
        ) : null}
        {this.state.showTextMenu ? (
          <TextMenu
            onChange={(property, value, e) =>
              this.formatText(property, value, e)
            }
            activeFormats={this.state.activeFormats}
            inactiveFillColor="#000"
            activeFillColor="#50e3c2"
          />
        ) : null}
        {this.state.showAlignmentMenu ? (
          <AlignmentMenu selectTool={(tool, e) => this.selectTool(tool, e)} />
        ) : null}
        <Toolbar>
          <ColorPickerTool
            editor={this.state.editor}
            selectTool={(tool, e) => this.selectTool(tool, e)}
            currentColor={this.state.currentColor}
          />
          <TextTool
            selectTool={(tool, e) => this.selectTool(tool, e)}
            selectedTool={this.state.selectedTool}
            editor={this.state.editor}
          />
          <AlignmentTool
            selectTool={(tool, e) => this.selectTool(tool, e)}
            activeFormats={this.state.activeFormats}
            currentAlignmentTool={this.state.currentAlignmentTool}
          />
        </Toolbar>
        <Editable
          activate={e => this.activateEditor(e)}
          setEditor={editor => this.setEditor(editor)}
        />
      </div>
    )
  }
}

export default Editor
