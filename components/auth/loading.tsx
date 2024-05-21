import { LoaderIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className='h-svh flex items-center justify-center'>
      <LoaderIcon className='h-6 w-6 animate-spin' />
    </div>
  )
}
