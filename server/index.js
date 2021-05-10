import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import fs from 'fs'

import ingredientsRoutes from './routes/ingredients.js'

// Create an express instance
const app = express()

// Allow cross origin requests.
// PUT THIS BEFORE OTHER SETTINGS!!
app.use(cors())

// Set a (large) limit to the request size (for images)
// DEFINE THE OPTIONS BEFORE THE ROUTES!!!
app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Setup a prefix for ingredients route.
// i.e. if you specified a route /yyy in the component
// it will be reached as /prefix/yyy
app.use('/ingredients', ingredientsRoutes)


// Connection string to MongoDB Atlass database
// mongodb+srv://nutrition_app:<password>@cluster0.yvpy9.mongodb.net/nutrition?retryWrites=true&w=majority
const MONGO_PASS = fs.readFileSync('./mongo_password', 'utf8')
const CONNECTION_URL = `mongodb+srv://nutrition_app:${MONGO_PASS}@cluster0.yvpy9.mongodb.net/nutrition?retryWrites=true&w=majority`

// Server port (environmental variable if present or port 4000)
const PORT = process.env.PORT || 4000

// Connect to mongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    // If the connection is successful
    () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

  )
  .catch(
    // If an error happens during connection
    (error) => console.log(error.message)
  )

// Additional mongoose setup
mongoose.set('useFindAndModify', false)
