import { z } from 'zod';
import { UserSchema } from '../users/userssModle';

export const MessageSchema = z.object({
    chatId: z.string(),
    sender: UserSchema,
    messageId: z.string(),
    createdAt: z.number(),
    updatedAt: z.number(),
    text: z.string(),
    image: z.string().optional(),
})

export type Message = z.infer<typeof MessageSchema>