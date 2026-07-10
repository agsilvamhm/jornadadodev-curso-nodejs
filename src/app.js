import express from 'express'
import router from './routes.js'

const app = express()

// indicar para o express ler o body com json
app.use(express.json())

app.use(router)

export default app
