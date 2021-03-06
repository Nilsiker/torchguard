const express = require('express')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./api/users')
const miceRouter = require('./api/mice')
const loginRouter = require('./api/login')
const signupRouter = require('./api/signup')

const app = express()

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
// app.use(express.static('build'))
app.use(express.json())
// app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/login', loginRouter)
app.use('/api/signup', signupRouter)
app.use('/api/users', usersRouter)
app.use('/api/mice', miceRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app