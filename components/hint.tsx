import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export type HintProps = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
  label: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'end' | 'center'
  sideOffset?: number
  alignOffset?: number
}

export default function Hint({
  children,
  label,
  side,
  align,
  sideOffset,
  alignOffset
}: HintProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
