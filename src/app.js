const express = require('express')

const config = require('./config')
const routes = require('./routes')
const { errorHandler } = require('./middleware/error')
const { logger, expressWinston } = require('./utils')
const httpStatus = require('http-status')

// Initiate express instance
const app = express()

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// configuration to log http request automatically
app.use(expressWinston)

// Default response for default url
app.get('/', (_, res) => res.send('Math API v1.0'))

// api routes
app.use(routes);

// Handler error for other url/path. Not found.
app.use('*', (_, res) => {
  res.status(httpStatus.NOT_FOUND).send('Not found')
})

// handle error
app.use(errorHandler);

// Run express app
app.listen(config.PORT, () => {
  logger.info(`App listening on port ${config.PORT}!`)
})


module.exports = app
