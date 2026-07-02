import { NextFunction, Request, Response } from 'express'
import { ZodObject, ZodRawShape } from 'zod'

export const validate =
  <T extends ZodObject<ZodRawShape>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params
    })
    if (!result.success) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: result.error.issues.map((issue) => ({
          field: issue.path.slice(1).join('.'),
          message: issue.message
        }))
      })
    }
    next()
  }
