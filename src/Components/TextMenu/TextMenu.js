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

function TextMenu({
  onChange,
  activeFormats,
  activeFillColor,
  inactiveFillColor
}) {
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
        <button
          type="button"
          name="format-bold"
          onMouseDown={e => onChange('bold', undefined, e)}
        >
          <BoldIcon
            fill={activeFormats.bold ? activeFillColor : inactiveFillColor}
          />
        </button>
        <button
          type="button"
          name="format-italic"
          onMouseDown={e => onChange('italic', undefined, e)}
        >
          <ItalicIcon
            fill={activeFormats.italic ? activeFillColor : inactiveFillColor}
          />
        </button>
        <button
          type="button"
          name="format-underline"
          onMouseDown={e => onChange('underline', undefined, e)}
        >
          <UnderlineIcon
            fill={activeFormats.underline ? activeFillColor : inactiveFillColor}
          />
        </button>
        <button
          type="button"
          name="format-strikeThrough"
          onMouseDown={e => onChange('strikeThrough', undefined, e)}
        >
          <StrikethroughIcon
            fill={
              activeFormats.strikeThrough ? activeFillColor : inactiveFillColor
            }
          />
        </button>
      </div>
    </div>
  )
}

export default TextMenu
