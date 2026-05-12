import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { routes } from './routes/index.js'

const app = express()
const port = process.env.PORT || 3333
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(cors({ origin: frontendUrl }))
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Forlitec API rodando em http://localhost:${port}`)
})
