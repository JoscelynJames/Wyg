import React from 'react'
import './Dropdown.scss'

function Dropdown({ options, name, style }) {
  return (
    <select name={name} style={style}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
