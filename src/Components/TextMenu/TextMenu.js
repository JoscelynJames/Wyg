import React from 'react'
import './TextMenu.scss'
import Dropdown from '../Common/Dropdown/Dropdown'
import BoldIcon from '../Common/Icons/BoldIcon'
import ItalicIcon from '../Common/Icons/ItalicIcon'
import UnderlineIcon from '../Common/Icons/UnderlineIcon'
import StrikethroughIcon from '../Common/Icons/StrikethroughIcon'

const fonts = [
  { value: 'Quicksand' },
  { value: 'Cursive' },
  { value: 'Fantasy' },
  { value: 'Helvetica' },
  { value: 'Monospace' },
  { value: 'Sans-serif' },
  { value: 'Serif' },
  { value: 'Times' }
]

const sizes = [
  { displayValue: 'Heading 1', value: '<H1>' },
  { displayValue: 'Heading 2', value: '<H2>' },
  { displayValue: 'Heading 3', value: '<H3>' },
  { displayValue: 'Heading 4', value: '<H4>' },
  { displayValue: 'Heading 5', value: '<H5>' },
  { displayValue: 'Heading 6', value: '<H6>' },
  { displayValue: 'Text', value: '<p>' }
]

function TextMenu({ onChange }) {
  return (
    <div id="text-menu">
      <div>
        <Dropdown
          options={fonts}
          name="font"
          onChange={e => onChange('fontName', e.target.value, e)}
        />
        <Dropdown
          options={sizes}
          name="size"
          onChange={e => onChange('formatBlock', e.target.value, e)}
        />
      </div>
      <div className="text-format">
        <button type="button" name="format-bold">
          <BoldIcon handleMouseDown={e => onChange('bold', undefined, e)} />
        </button>
        <button type="button" name="format-italic">
          <ItalicIcon handleMouseDown={e => onChange('italic', undefined, e)} />
        </button>
        <button type="button" name="format-underline">
          <UnderlineIcon
            handleMouseDown={e => onChange('underline', undefined, e)}
          />
        </button>
        <button type="button" name="format-strikethrough">
          <StrikethroughIcon
            handleMouseDown={e => onChange('strikeThrough', undefined, e)}
          />
        </button>
      </div>
    </div>
  )
}

export default TextMenu
