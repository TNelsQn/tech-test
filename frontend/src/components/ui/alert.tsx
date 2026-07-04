import type * as React from 'react'
import { cn } from '@/lib/utils'

export function Alert({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="alert"
      data-slot="alert"
      className={cn(
        'border border-border-soft bg-white p-6 text-center text-sm text-slate-600',
        className,
      )}
      {...props}
    />
  )
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="alert-title"
      className={cn('mb-2 text-base font-bold text-brand', className)}
      {...props}
    />
  )
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="alert-description"
      className={cn('text-sm leading-relaxed', className)}
      {...props}
    />
  )
}
