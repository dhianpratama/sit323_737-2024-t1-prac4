const logger = require('../utils/logger')

const add = (num1, num2) => {
    return num1 + num2;
}

const substract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    logger.info('divide ', num1, num2)
    return num1 / num2;
}

module.exports = {
    add,
    substract,
    multiply,
    divide
}