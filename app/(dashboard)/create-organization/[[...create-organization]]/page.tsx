'use client'

import { CreateOrganization } from '@clerk/nextjs'

export default function CreateOrganizationPage() {
  return (
    <div className='flex justify-center items-center h-full'>
      <CreateOrganization path='/create-organization' />
    </div>
  )
}
