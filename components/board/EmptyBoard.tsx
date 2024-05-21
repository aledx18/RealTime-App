'use client'

import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { useApiMutation } from '@/hooks/use-api-mutation'

export default function EmptyBoard() {
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.create)

  function onClick() {
    if (!organization) return
    console.log('create')

    mutate({
      title: 'Board-liveblocksxd',
      orgId: organization.id
    })
  }

  return (
    <Button disabled={pending} variant='outline' onClick={onClick}>
      Create board
    </Button>
  )
}
