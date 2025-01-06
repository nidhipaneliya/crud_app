import { RESPONSE_STATUS } from "../config/constant"
import responseCode from "../config/responseCode"

const failureResponse = (data, res) => {
    return res.status(responseCode.validationError).json({
        STATUS: RESPONSE_STATUS.FAILURE,
        MESSAGE: data.message ? data.message : data,
    })
}

const successResponse = (data, res) => {
    return res.status(responseCode.success).json({
        STATUS: RESPONSE_STATUS.SUCCESS,
        MESSAGE: (res.message) ? res.message : 'Your request is successfully executed',
        DATA: data,
    });
}

module.exports ={
    failureResponse,
    successResponse
}