import React from 'react'
import withTool from '../WithTool/WithTool'
import OrderedListIcon from '../../Common/Icons/OrderedListIcon'

function ListTool({ selectTool }) {
  return (
    <button type="button" name="list-tool" onClick={e => selectTool('list', e)}>
      <OrderedListIcon />
    </button>
  )
}

export default withTool(ListTool)
