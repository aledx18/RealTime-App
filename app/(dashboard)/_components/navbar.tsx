'use client'

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { AppleIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-10 border-b px-4 py-3 backdrop-blur-md bg-gray-900/40 lg:px-6'>
      <div className='flex items-center justify-between lg:mx-52'>
        <Link className='flex items-center gap-2' href='/'>
          <AppleIcon className='h-6 w-6' />
        </Link>
        <nav className='hidden space-x-4 lg:flex items-center'>
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                },
                organizationSwitcherTrigger: {
                  padding: '6px',
                  width: '100%',
                  borderRadius: '8px',
                  justifyContent: 'space-between'
                }
              }
            }}
          />

          <UserButton />
        </nav>
      </div>
    </header>
  )
}
