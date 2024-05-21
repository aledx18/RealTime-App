type Props = {
  authorLabel: string
  createdAtLabel: string
  title: string
  disabled: boolean
}

export default function Footer({
  authorLabel,
  createdAtLabel,
  disabled,
  title
}: Props) {
  return (
    <div className='relalite p-3'>
      <p className='text-[13px] truncate max-w-[calc(100%-20px)] '>{title}</p>
      <p className='opacity-0 group-hover:opacity-100 transition-opacity text-[11px]'>
        {authorLabel} • {createdAtLabel}
      </p>
    </div>
  )
}
