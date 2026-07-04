import { z } from 'zod'

export const YourNextDeliveryResponseSchema = z.object({
  title: z.string(),
  message: z.string(),
  totalPrice: z.number(),
  freeGift: z.boolean(),
})

export const ApiErrorResponseSchema = z.object({
  message: z.string(),
})

export type YourNextDeliveryResponse = z.infer<
  typeof YourNextDeliveryResponseSchema
>
