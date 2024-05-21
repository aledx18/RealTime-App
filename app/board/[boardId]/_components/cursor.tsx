'use client'

import { memo } from 'react'
import { MousePointer2 } from 'lucide-react'
import { useOther } from '@/liveblocks.config'

type CursorProps = {
  connectionId: number
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user?.presence.cursor)
  const name = info?.name || 'Teammate'

  if (!cursor) {
    return null
  }
  console.log('cursor', cursor, info)
  const { x, y } = cursor

  return (
    <foreignObject
      style={{ transform: `translate(${x}px, ${y}px)` }}
      height={50}
      width={name.length * 10 + 24}
      className='relative drop-shadow-md'>
      <MousePointer2 className='h-5 w-5 text-red-500' />
      <div className='absolute left-5 px-1.5 py-0.5 rounded-xl text-xs font-semibold bg-red-500'>
        {name}
      </div>
    </foreignObject>
  )
})

Cursor.displayName = 'Cursor'
