import type { Request, Response } from 'express'
import { loggerConfig } from './logger'

export const rateLimiterConfig = {
  windowsMS: 10 * 60 * 1000,
  max: 50,
  message: 'Too many request, please try again after 10 minutes',
  statusCode: 429,
  handler: (req: Request, res: Response) => {
    loggerConfig.warn(`Rate limit exceeded for IP: ${req.ip}`)
    res.status(429).json({
      status: 'error',
      message: 'Too many request, please try again after 10 minutes',
      timestamp: new Date().toISOString()
    })
  }
}
