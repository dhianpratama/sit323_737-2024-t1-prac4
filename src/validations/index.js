const Joi = require('joi');

const add = {
  body: Joi.object().keys({
    num1: Joi.number().required(),
    num2: Joi.number().required(),
  }),
};

const substract = {
    body: Joi.object().keys({
        num1: Joi.number().required(),
        num2: Joi.number().required(),
    }),
};

const multiply = {
    body: Joi.object().keys({
        num1: Joi.number().required(),
        num2: Joi.number().required(),
    }),
};

const divide = {
    body: Joi.object().keys({
        num1: Joi.number().required(),
        num2: Joi.number().required().not(0),
    }),
};

module.exports = {
    add,
    substract,
    multiply,
    divide
}
