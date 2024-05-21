'use client'

import { useOrganizationList } from '@clerk/nextjs'
import Item from './Item'

export default function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  })

  if (!userMemberships.data?.length) return null

  return (
    <ul className='space-y-4 w-full'>
      {userMemberships.data.map((membership) => (
        <Item
          key={membership.organization.id}
          name={membership.organization.name}
          id={membership.organization.id}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  )
}
