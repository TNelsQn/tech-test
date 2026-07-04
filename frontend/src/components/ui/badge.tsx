import type * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="badge"
      className={cn(
        'inline-flex items-center justify-center rounded-sm bg-gift px-4 py-2 text-xs font-bold uppercase text-gift-text',
        className,
      )}
      {...props}
    />
  )
}
