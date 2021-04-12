import React from 'react'
import {
  TheContent,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div>
      <TheHeader />
      <div className="c-body">
        <TheContent />
      </div>
    </div>
  )
}

export default TheLayout
