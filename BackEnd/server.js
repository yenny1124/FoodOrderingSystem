require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
// const Order = require('./models/orderModel') // import order model
const app = express()
const itemRoute = require('./routes/itemRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// cors middleware
app.use(cors(corsOptions))

// middleware to access json datatype
app.use(express.json())
// middleware to access form datatype
app.use(express.urlencoded({extended: false}))

// routes 

app.use('/api/items', itemRoute)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/main', (req, res) => {
    res.send('Rolls and Rolls + Sushi')
})

app.use(errorMiddleware)

// connect to mongoDB
mongoose.
connect(MONGO_URL) // the actual url is in env file
  .then(() => {
    console.log('Connected to MongoDB')
    //connect to port 
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
}).catch((error)=>{
    console.log(error)
  })
  