import { Gift } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FreeGiftBadgeProps {
  className?: string
}

export function FreeGiftBadge({ className }: FreeGiftBadgeProps) {
  return (
    <Badge className={cn('-rotate-6 gap-1.5 shadow-sm lg:rotate-6', className)}>
      <Gift aria-hidden="true" className="size-3" />
      Free gift
    </Badge>
  )
}
