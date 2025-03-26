'use client'

import useDevNavStore from '@/stores/dialogs/dev-nav-store'
import React from 'react'

const DevNav = () => {
  const { setActiveState } = useDevNavStore()

  return (
    <div
      className="fixed bottom-4 right-4 w-8 h-8 rounded-md bg-hm_accent/20"
      onClick={() => setActiveState(true)}
    ></div>
  )
}

export default DevNav
