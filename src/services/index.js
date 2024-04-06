const add = (num1, num2) => {
  return num1 + num2
}

const substract = (num1, num2) => {
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

const power = (num1, num2) => {
  return Math.pow(num1, num2)
}

const squareRoot = (num1) => {
  return Math.sqrt(num1)
}

const modulo = (num1, num2) => {
  return num1 % num2
}

module.exports = {
  add,
  substract,
  multiply,
  divide,
  power,
  squareRoot,
  modulo
}
