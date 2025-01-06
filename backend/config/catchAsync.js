const { RESPONSE_STATUS } = require("./constant");
const responseCode = require("../config/responseCode");

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        logger.error(err);
        console.error(err);
        res.status(responseCode.validationError).json({
            STATUS: RESPONSE_STATUS.FAILURE,
            MESSAGE: err.message,
        });
    });
};

module.exports = catchAsync;
