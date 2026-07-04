import { z } from 'zod';

export const PouchSizeSchema = z.enum(['A', 'B', 'C', 'D', 'E', 'F']);

export const CatSchema = z.object({
  name: z.string(),
  subscriptionActive: z.boolean(),
  breed: z.string(),
  pouchSize: PouchSizeSchema,
});

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  cats: z.array(CatSchema),
});

export const UsersSchema = z.array(UserSchema);

export type PouchSize = z.infer<typeof PouchSizeSchema>;
export type Cat = z.infer<typeof CatSchema>;
export type User = z.infer<typeof UserSchema>;
