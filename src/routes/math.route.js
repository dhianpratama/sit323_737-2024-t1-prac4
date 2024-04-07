const express = require('express')
const validation = require('../validations')
const controller = require('../controllers')
const validate = require('../middleware/validate')

const router = express.Router()

// API(s) for Task 4.1P
router.post('/add', validate(validation.add), controller.add)
router.post('/subtract', validate(validation.subtract), controller.subtract)
router.post('/multiply', validate(validation.multiply), controller.multiply)
router.post('/divide', validate(validation.divide), controller.divide)

// API(s) for Task 4.1C
router.post('/power', validate(validation.power), controller.power)
router.post('/squareRoot', validate(validation.squareRoot), controller.squareRoot)
router.post('/modulo', validate(validation.modulo), controller.modulo)

module.exports = router
