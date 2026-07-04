import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ApiError } from '@/lib/api'

interface DeliveryErrorProps {
  error: Error
}

export function DeliveryError({ error }: DeliveryErrorProps) {
  const message =
    error instanceof ApiError && error.status === 404
      ? 'We could not find delivery details for this customer.'
      : 'Something went wrong while loading your delivery details.'

  return (
    <Alert className="mx-auto max-w-md md:max-w-2xl">
      <AlertTitle>Delivery unavailable</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
