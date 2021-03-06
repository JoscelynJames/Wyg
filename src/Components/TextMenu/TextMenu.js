import React from 'react'
import './TextMenu.scss'
import Dropdown from '../Common/Dropdown/Dropdown'
import BoldIcon from '../Common/Icons/BoldIcon'
import ItalicIcon from '../Common/Icons/ItalicIcon'
import UnderlineIcon from '../Common/Icons/UnderlineIcon'
import StrikethroughIcon from '../Common/Icons/StrikethroughIcon'
import HighlightTextIcon from '../Common/Icons/HighlightTextIcon'
import Overlay from '../Common/Overlay/Overlay'
import fonts from '../../assets/fontFamilies'
import sizes from '../../assets/fontSizes'

const overlayStyles = {
  top: '180px',
  right: '120px',
  flexDirection: 'column',
  display: 'flex'
}

function TextMenu({
  onChange,
  activeFormats,
  activeFillColor,
  inactiveFillColor
}) {
  return (
    <Overlay id="text-menu" style={overlayStyles}>
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
        <button
          type="button"
          name="format-hiliteColor"
          onMouseDown={e => onChange('hiliteColor', undefined, e)}
        >
          <HighlightTextIcon
            fill={
              activeFormats.hiliteColor ? activeFillColor : inactiveFillColor
            }
          />
        </button>
      </div>
    </Overlay>
  )
}

export default TextMenu
