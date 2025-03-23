'use client'

import React, { MouseEvent, ReactNode, useState } from 'react'

import './rippled-button.scss'

type ComponentProps = {
  children: ReactNode
}

type Ripple = {
  id: number
  size: number
  x: number
  y: number
}

const RippledButton = ({ children }: ComponentProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function createRipple(event: MouseEvent) {
    const target = event.currentTarget as HTMLDivElement
    const rect = target.getBoundingClientRect()

    const size = Math.max(rect.height, rect.width)
    
    const newRipple: Ripple = {
      id: Date.now(),
      size: size,
      x: event.clientX - rect.left - size/2,
      y: event.clientY - rect.top - size/2,
    }

    console.log('event.clientX', event.clientX)
    console.log('rect.left', rect.left)

    console.log('height', rect.height)

    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id))
    }, 900)
  }

  return (
    <button className="rippled-button" onClick={createRipple} onDoubleClick={() => alert('dbclicked!')}>
      {children}
      <div className="rippled-container">
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="ripple"
            data-ewr={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          ></span>
        ))}
      </div>
    </button>
  )
}

export default RippledButton
