import React from 'react'
import './Dropdown.scss'

function Dropdown({ options, name, style, onChange }) {
  return (
    <select id="dropdown" name={name} style={style} onChange={e => onChange(e)}>
      {options.map(option => (
        <option class="dropdown-option" key={option.value} value={option.value}>
          {option.displayValue || option.value}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
