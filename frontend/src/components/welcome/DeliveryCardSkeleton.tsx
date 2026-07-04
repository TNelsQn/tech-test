import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function DeliveryCardSkeleton() {
  return (
    <Card className="mx-auto grid w-full max-w-md overflow-visible lg:max-w-5xl lg:grid-cols-5">
      <Skeleton className="hidden h-72 rounded-l-lg lg:col-span-2 lg:block" />
      <CardContent className="px-7 pb-8 pt-14 lg:col-span-3 lg:px-10 lg:py-10">
        <Skeleton className="mx-auto h-5 w-4/5 lg:mx-0" />
        <Skeleton className="mx-auto mt-3 h-4 w-full lg:mx-0" />
        <Skeleton className="mx-auto mt-2 h-4 w-4/5 lg:mx-0" />
        <Skeleton className="mx-auto mt-6 h-4 w-36 lg:mx-0" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          <Skeleton className="h-9" />
          <Skeleton className="h-9" />
        </div>
      </CardContent>
    </Card>
  )
}
