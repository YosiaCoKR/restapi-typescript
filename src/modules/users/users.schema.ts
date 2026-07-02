import { z } from 'zod'

export const userSchema = z.object({
  body: z
    .object({
      name: z
        .string('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name must be less than 50 characters long'),
      email: z.email('Email is required'),
      password: z
        .string('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(32, 'Password cannot exceed 32 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
          /[@$!%*?&]/,
          'Password must contain at least one special character'
        ),
      confirmPassword: z.string('Confirm Password is required')
    })
    .refine((user) => user.password === user.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword']
    })
})

export const getUserSchema = z.object({
  params: z.object({
    id: z.cuid('Invalid user ID')
  })
})

export type userRegisterForm = z.infer<typeof userSchema>['body']
