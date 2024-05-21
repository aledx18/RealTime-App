import { ReactNode } from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar/index'

export default function MainLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      {/* <MobileHeader /> */}
      <div className='flex min-h-screen'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <Navbar />
          <main className='flex-1 px-4 py-6 lg:px-6'>{children}</main>
        </div>
      </div>
    </>
  )
}
