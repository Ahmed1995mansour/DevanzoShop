import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notfound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('API  is running.....')
})

app.use('/api/products', productRoutes)

app.use(notfound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
)
