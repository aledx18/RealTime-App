import Link from 'next/link'
import Overlay from './overlay'
import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import Footer from './footer'

type Props = {
  id: string
  title: string
  imageUrl: string
  authorId: string
  authorName: string
  createdAt: number
  orgId: string
}

export default function BoardCard({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId
}: Props) {
  const { userId } = useAuth()

  const authorLabel = userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true
  })

  return (
    <Link href={`/board/${id}`}>
      <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden w-full h-full'>
        <div className='relative flex-1'>
          <img
            src={imageUrl}
            alt={title}
            className='w-auto h-auto object-fill object-center'
          />
        </div>
        <Overlay />
        <Footer
          title={title}
          authorLabel={authorLabel}
          disabled={false}
          createdAtLabel={createdAtLabel}
        />
      </div>
    </Link>
  )
}
