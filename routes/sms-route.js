const router = require('express').Router();
const { check, validationResult } = require('express-validator')
const otpController = require('../contorllers/otp-controller');

router.get('/', otpController.getOTP);

router.post('/send-otp',
    [
        check('phoneNumber').notEmpty()
            .withMessage('MobileNo Can not be Empty'),
        check('phoneNumber').isMobilePhone()
            .withMessage('Plz Enter Valid Mobile No'),
    ],
    otpController.postOTP);

module.exports = router