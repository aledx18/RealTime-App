'use client'

import { Skeleton } from '@/components/ui/skeleton'

type InfoProps = {
  boardId: string
}

export default function Info({ boardId }: InfoProps) {
  return (
    <div className='absolute text-gray-800 top-2 left-2 bg-white rounded-lg px-1.5 h-12 flex items-center shadow-md'>
      info
    </div>
  )
}
export function InfoSkeleton() {
  return (
    <div className='absolute text-gray-100 top-2 left-2 bg-white rounded-lg h-12 flex items-center shadow-md w-[300px] '>
      <Skeleton className='h-full w-full' />
    </div>
  )
}
