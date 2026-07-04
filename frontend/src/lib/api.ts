import {
  ApiErrorResponseSchema,
  YourNextDeliveryResponseSchema,
  type YourNextDeliveryResponse,
} from '@/lib/api-schemas'
import type { z } from 'zod'

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

function getErrorMessage(errorBody: unknown, fallback: string): string {
  return ApiErrorResponseSchema.safeParse(errorBody).data?.message ?? fallback
}

async function requestJson<TSchema extends z.ZodType>(
  url: string,
  schema: TSchema,
  signal?: AbortSignal,
): Promise<z.infer<TSchema>> {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    let errorBody: unknown

    try {
      errorBody = await response.json()
    } catch {
      errorBody = undefined
    }

    throw new ApiError(
      getErrorMessage(errorBody, 'Unable to load delivery details.'),
      response.status,
    )
  }

  const responseBody: unknown = await response.json()

  return schema.parse(responseBody)
}

export function getYourNextDelivery(
  userId: string,
  signal?: AbortSignal,
): Promise<YourNextDeliveryResponse> {
  return requestJson(
    `/comms/your-next-delivery/${encodeURIComponent(userId)}`,
    YourNextDeliveryResponseSchema,
    signal,
  )
}
