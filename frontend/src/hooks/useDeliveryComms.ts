import { useEffect, useState } from 'react'
import { ApiError, getYourNextDelivery } from '@/lib/api'
import type { YourNextDeliveryResponse } from '@/types/comms'

type DeliveryCommsState =
  | { status: 'loading' }
  | { status: 'success'; data: YourNextDeliveryResponse }
  | { status: 'error'; error: ApiError | Error }

export function useDeliveryComms(userId: string | undefined): DeliveryCommsState {
  const [state, setState] = useState<DeliveryCommsState>({ status: 'loading' })

  useEffect(() => {
    if (!userId) {
      setState({
        status: 'error',
        error: new Error('No customer ID was provided.'),
      })
      return
    }

    const controller = new AbortController()
    setState({ status: 'loading' })

    getYourNextDelivery(userId, controller.signal)
      .then((data) => {
        setState({ status: 'success', data })
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setState({
          status: 'error',
          error: error instanceof Error ? error : new Error('Unknown error'),
        })
      })

    return () => {
      controller.abort()
    }
  }, [userId])

  return state
}
