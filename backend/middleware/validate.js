const Joi = require('joi');
const { RESPONSE_STATUS } = require('../config/constant');
const responseCode = require('../config/responseCode');

/**
 * Middleware to validate the request body, query, or params against a Joi schema.
 * @param {Object} schema - The Joi schema to validate against.
 * @param {string} property - The property to validate (e.g., 'body', 'query', 'params').
 */
const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false });
        if (error) {
            return res.status(responseCode.badRequest).json({
                STATUS: RESPONSE_STATUS.FAILURE,
                MESSAGE: 'Validation error',
                ERRORS: error.details.map((detail) => detail.message),
            });
        }
        next();
    };
};

module.exports = validate;
