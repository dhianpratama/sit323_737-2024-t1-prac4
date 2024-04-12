const express = require('express')
const mathRoute = require('./math.route')
const logger = require('../utils/logger')

const router = express.Router()

router.get('/make-it-crash', () => {
  logger.info('Stopping app for testing purpose. Exiting app...')
  process.exit(0)
})

router.use('/math', mathRoute)

module.exports = router
