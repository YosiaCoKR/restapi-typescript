import pino from 'pino'
import { env } from './env'

export const loggerConfig = pino({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport:
    env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined
})
