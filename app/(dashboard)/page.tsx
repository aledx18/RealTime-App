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
        <EmptyBoard />
        {!organization ? (
          'create an organization to see boards'
        ) : (
          <ListBoards orgId={organization.id} />
        )}
      </div>
    </div>
  )
}
