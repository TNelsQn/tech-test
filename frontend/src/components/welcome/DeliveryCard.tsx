import { ClipboardList, PencilLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { FreeGiftBadge } from '@/components/welcome/FreeGiftBadge'
import { formatPrice } from '@/lib/formatters'
import type { YourNextDeliveryResponse } from '@/types/comms'

interface DeliveryCardProps {
  delivery: YourNextDeliveryResponse
}

export function DeliveryCard({ delivery }: DeliveryCardProps) {
  const price = formatPrice(delivery.totalPrice)

  return (
    <Card className="relative mx-auto grid w-full max-w-md overflow-visible shadow-xl lg:max-w-5xl lg:grid-cols-5">
      {delivery.freeGift ? (
        <FreeGiftBadge className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 lg:-top-4 lg:bottom-auto lg:left-auto lg:right-0 lg:translate-x-3 lg:translate-y-0" />
      ) : null}

      <div className="absolute left-1/2 top-0 z-10 size-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-sm lg:hidden">
        <img
          src="/cat-delivery.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="hidden overflow-hidden rounded-l-lg lg:col-span-2 lg:block">
        <AspectRatio ratio={1.42}>
          <img
            src="/cat-delivery.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </div>

      <CardContent className="px-7 pb-12 pt-14 text-center lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-10 lg:text-left">
        <CardTitle>{delivery.title}</CardTitle>
        <p className="mt-2 text-sm leading-relaxed text-copy-muted">
          {delivery.message}
        </p>
        <p className="mt-5 text-sm font-bold text-copy-strong">
          Total price: {price}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          <Button type="button" size="sm" className="min-w-0">
            <ClipboardList aria-hidden="true" className="size-3.5" />
            <span className="truncate">See details</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="min-w-0"
          >
            <PencilLine aria-hidden="true" className="size-3.5" />
            <span className="truncate">Edit delivery</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
