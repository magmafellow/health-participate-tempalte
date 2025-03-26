'use client'

import useDevNavStore from '@/stores/dialogs/dev-nav-store'
import React from 'react'

const DevNavButton = () => {
  const { setActiveState } = useDevNavStore()

  return (
    <div
      className="w-8 h-8 rounded-md bg-hm_accent/20"
      onClick={() => setActiveState(true)}
    ></div>
  )
}

export default DevNavButton
