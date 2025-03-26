'use client'

import useUserJsonSessionStore from '@/stores/dialogs/user-json-session-store'
import React from 'react'

const UserJsonSessionButton = () => {
  const { setActiveState } = useUserJsonSessionStore()

  return (
    <div
      className="h-8 w-8 bg-amber-300 rounded-md"
      onClick={() => {
        setActiveState(true)
      }}
    ></div>
  )
}

export default UserJsonSessionButton
