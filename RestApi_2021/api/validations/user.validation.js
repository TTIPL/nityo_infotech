const Joi = require("@hapi/joi");

/**
 * Date: 09-10-2021
 * Author: Sarathkumar
 * Description: Create new user validation
 */
const userValidation = (data) => {
 // console.log(data);
  
  const schema = Joi.object({
    email: Joi.string().required().max(100).email(),
    name: Joi.string().required().max(100),
    password: Joi.string().required().min(8).max(50),
  });
  return schema.validate(data);
};

/**
 * Date: 09-10-2021
 * Author: Sarathkumar
 * Description: Login validation
 */
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(data);
};

module.exports = { userValidation, loginValidation };
