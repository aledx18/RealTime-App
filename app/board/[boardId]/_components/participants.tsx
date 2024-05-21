'use client'
import { Skeleton } from '@/components/ui/skeleton'

import UserAvatar from './user-avatar'
import { useOthers, useSelf } from '@/liveblocks.config'

export default function Participants() {
  const users = useOthers()
  const currentUser = useSelf()
  const MAX_USERS = 2
  const hasMoreUser = users.length > MAX_USERS

  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
      <div className='flex gap-x-2'>
        {users.slice(0, MAX_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              name={info?.name}
              src={info?.picture}
              fallback={info?.name?.[0] || 'T'}
            />
          )
        })}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
        {hasMoreUser && (
          <UserAvatar
            name={`+${users.length - MAX_USERS} more`}
            fallback={`+${users.length - MAX_USERS}`}
          />
        )}
      </div>
    </div>
  )
}

export function ParticipantsSkeleton() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md w-[200px] '>
      <Skeleton className='h-full w-full' />
    </div>
  )
}
