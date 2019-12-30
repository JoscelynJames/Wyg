import React from 'react'
import './ListMenu.scss'
import UnorderedListIcon from '../Common/Icons/UnorderedListIcon'
import OrderedListIcon from '../Common/Icons/OrderedListIcon'
import Overlay from '../Common/Overlay/Overlay'

const overlayStyles = {
  top: '270px',
  right: '120px',
  flexDirection: 'row',
  display: 'flex'
}

function TextMenu({ formatText }) {
  return (
    <Overlay id="list-menu" style={overlayStyles}>
      <button
        type="button"
        name="format-ol"
        onClick={e => formatText('insertUnorderedList', undefined, e)}
      >
        <UnorderedListIcon />
      </button>
      <button
        type="button"
        name="format-ul"
        onClick={e => formatText('insertOrderedList', undefined, e)}
      >
        <OrderedListIcon />
      </button>
    </Overlay>
  )
}

export default TextMenu
