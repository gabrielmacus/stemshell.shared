import { z } from 'zod';

export const createUserSchema = z
    .object({
        username: z.string().regex(/^(?=.{3,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/),
        password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/)
        // Minimum 8, max 30 characters, at least one letter and one number:
    }).strict()
    ;

export type CreateUserDto = z.infer<typeof createUserSchema>;

