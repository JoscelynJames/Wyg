import React from 'react'
import './TextMenu.scss'
import Dropdown from '../Common/Dropdown/Dropdown'
import BoldIcon from '../Common/Icons/BoldIcon'
import ItalicIcon from '../Common/Icons/ItalicIcon'
import UnderlineIcon from '../Common/Icons/UnderlineIcon'
import StrikethroughIcon from '../Common/Icons/StrikethroughIcon'

const fonts = [
  { value: 'Cursive	' },
  { value: 'Fantasy	' },
  { value: 'Helvetica	' },
  { value: 'Monospace	' },
  { value: 'Sans-serif	' },
  { value: 'Serif	' },
  { value: 'Times	' }
]

const sizes = [
  { value: 8 },
  { value: 9 },
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 14 },
  { value: 16 },
  { value: 18 },
  { value: 20 },
  { value: 22 },
  { value: 24 },
  { value: 26 },
  { value: 28 },
  { value: 30 },
  { value: 32 },
  { value: 34 },
  { value: 36 },
  { value: 38 },
  { value: 40 },
  { value: 45 },
  { value: 50 },
  { value: 55 },
  { value: 60 },
  { value: 65 },
  { value: 70 },
  { value: 75 },
  { value: 80 }
]

function TextMenu() {
  return (
    <div id="text-menu">
      <div>
        <Dropdown options={fonts} name="font" />
        <Dropdown options={sizes} name="size" />
      </div>
      <div className="text-format">
        <BoldIcon />
        <ItalicIcon />
        <UnderlineIcon />
        <StrikethroughIcon />
      </div>
    </div>
  )
}

export default TextMenu
