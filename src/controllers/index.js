const mathService = require('../services');

const add = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathService.add(num1, num2);
    res.send({ result });
};

const substract = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathService.substract(num1, num2);
    res.send({ result });
};

const multiply = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathService.multiply(num1, num2);
    res.send({ result });
};

const divide = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathService.divide(num1, num2);
    res.send({ result });
};

module.exports = {
    add,
    substract,
    multiply,
    divide
}