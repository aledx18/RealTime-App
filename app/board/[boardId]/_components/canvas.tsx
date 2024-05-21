'use client'

import { useMutation } from '@/liveblocks.config'

import Participants from './participants'
import { CursorsPresence } from './CursorsPresence'

import { PointerEvent, WheelEvent, useCallback, useState } from 'react'
import { pointerEventToCanvasPoint } from '@/lib/utils'

type CanvasProps = {
  boardId: string
}

type Camera = {
  x: number
  y: number
}

export default function Canvas({ boardId }: CanvasProps) {
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })

  const onWheel = useCallback((e: WheelEvent) => {
    setCamera((prev) => ({
      x: prev.x - e.deltaX,
      y: prev.y - e.deltaY
    }))
  }, [])

  const onPointerMove = useMutation(({ setMyPresence }, e: PointerEvent) => {
    e.preventDefault()
    const current = pointerEventToCanvasPoint(e, camera)
    setMyPresence({ cursor: current })
  }, [])

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null })
  }, [])

  //   const others = useOthers()
  //   const userCount = others.length

  return (
    <main className='w-screen h-2/3 bg-neutral-200 relative touch-none'>
      <Participants />

      <svg
        className='h-[100vh] w-[100vw]'
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}>
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  )
}
