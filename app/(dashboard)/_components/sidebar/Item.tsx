import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import Hint from '@/components/hint'

type ItemImageProps = {
  id: string
  imageUrl: string
  name: string
}

export default function Item({ id, imageUrl, name }: ItemImageProps) {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const onClick = () => {
    if (!setActive) return
    setActive({ organization: id })
  }
  return (
    <div className='aspect-square relative'>
      <Hint label={name} side='right' align='start' sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          quality={10}
          className={cn(
            'rounded-xl cursor-pointer opacity-20 hover:opacity-90 transition',
            isActive && 'opacity-100'
          )}
          onClick={onClick}
        />
      </Hint>
    </div>
  )
}
