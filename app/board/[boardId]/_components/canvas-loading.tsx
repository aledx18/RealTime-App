import { Loader } from 'lucide-react'
import { InfoSkeleton } from './info'
import { ParticipantsSkeleton } from './participants'

export default function CanvasLoading() {
  return (
    <div className='h-screen w-full bg-neutral-600 relative touch-none flex items-center justify-center'>
      <Loader className='h-6 w-6 text-primary animate-spin' />
      <InfoSkeleton />
      <ParticipantsSkeleton />
    </div>
  )
}
