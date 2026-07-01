import app from './app'
import { env } from './config/env'

app.listen(env.PORT, () => {
  console.log(`Server is running on port https://localhost:${env.PORT}`)
})
