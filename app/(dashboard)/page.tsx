'use client'

import EmptyBoard from '@/components/board/EmptyBoard'
import ListBoards from '@/components/board/ListBoards'
import { useOrganization } from '@clerk/nextjs'

export default function Home() {
  const { organization } = useOrganization()
  return (
    <div className='flex flex-col items-center'>
      <h1>Boards</h1>
      <div className=''>
        {!organization ? (
          <EmptyBoard />
        ) : (
          <ListBoards orgId={organization.id} />
        )}
      </div>
    </div>
  )
}
