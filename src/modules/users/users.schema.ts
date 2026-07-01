import { z } from 'zod'

export const userSchema = z.object({
  body: z
    .object({
      name: z
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name must be less than 50 characters long'),
      email: z.email('Invalid email address'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Password must be less than 20 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
      confirmPassword: z.string()
    })
    .refine((user) => user.password === user.confirmPassword, {
      message: 'Passwords do not match'
    })
})
