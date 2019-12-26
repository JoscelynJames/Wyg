import React from 'react'
import withTool from '../WithTool/WithTool'
import ListToolIcon from '../../Common/Icons/ListToolIcon'

function ListTool({ selectTool, currentListTool }) {
  return (
    <button type="button" name="list-tool" onClick={e => selectTool('list', e)}>
      <ListToolIcon />
    </button>
  )
}

export default withTool(ListTool)
