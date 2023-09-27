import {z} from 'zod';

export const UserSchema = z.object({
    uid: z.string(),
    email: z.string().optional(),
    displayName: z.string(),
    photoURL: z.string().optional(),
    lastLogin: z.number().optional(),
    createdAt: z.number().optional()
})

export type User = z.infer<typeof UserSchema>