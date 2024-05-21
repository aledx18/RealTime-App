'use client'

import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import BoardCard from './boardCard'
import { LoaderIcon } from 'lucide-react'

type Props = {
  orgId: string
}

export default function ListBoards({ orgId }: Props) {
  const data = useQuery(api.boards.get, { orgId })

  if (data === undefined) {
    return (
      <div className='flex items-center justify-center'>
        <LoaderIcon className='h-6 w-6 animate-spin' />
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
      {data.map((board) => (
        <BoardCard
          key={board._id}
          id={board._id}
          title={board.title}
          imageUrl={board.imageUrl}
          authorId={board.authorId}
          authorName={board.authorName}
          createdAt={board._creationTime}
          orgId={board.orgId}
        />
      ))}
    </div>
  )
}
