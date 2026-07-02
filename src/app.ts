import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import rateLimiter from 'express-rate-limit'
import helmet from 'helmet'
import pinoHttp from 'pino-http'
import { corsOptions } from './config/cors'
import { helmetOptions } from './config/helmet'
import { loggerConfig } from './config/logger'
import { rateLimiterConfig } from './config/rate-limiter'

const app: Application = express()

app.use(pinoHttp(loggerConfig))

app.use(cors(corsOptions))
app.use(helmet(helmetOptions))
app.use(express.json())
app.use(rateLimiter(rateLimiterConfig))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

export default app
