import { useParams } from 'react-router-dom'
import { DeliveryCard } from '@/components/welcome/DeliveryCard'
import { DeliveryCardSkeleton } from '@/components/welcome/DeliveryCardSkeleton'
import { DeliveryError } from '@/components/welcome/DeliveryError'
import { useDeliveryComms } from '@/hooks/useDeliveryComms'

export function WelcomePage() {
  const { userId } = useParams()
  const delivery = useDeliveryComms(userId)

  return (
    <main className="flex min-h-screen items-start overflow-x-hidden bg-page px-5 py-24 sm:px-8 md:pt-28 lg:px-10 lg:pt-36">
      <div className="mx-auto w-full">
        {delivery.status === 'loading' ? <DeliveryCardSkeleton /> : null}
        {delivery.status === 'error' ? (
          <DeliveryError error={delivery.error} />
        ) : null}
        {delivery.status === 'success' ? (
          <DeliveryCard delivery={delivery.data} />
        ) : null}
      </div>
    </main>
  )
}
