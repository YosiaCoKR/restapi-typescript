import 'dotenv/config'
import express, { type Application, type Request, type Response } from 'express'

const app: Application = express()

const PORT: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Server TypeScript Express Berhasil Berjalan!')
})

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`)
})
