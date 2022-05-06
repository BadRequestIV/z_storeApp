import React from 'react'
import { TrashIcon } from './icon'
import { resetFilter } from '../../../../Assets/data/setFilter'

const ResetBtn = () => {
  return (
    <button
      className='filterIcon'
      onClick={() => {
        resetFilter()
      }}
    >
      <TrashIcon />
    </button>
  )
}

export default ResetBtn