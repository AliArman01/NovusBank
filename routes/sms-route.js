const router = require('express').Router();

const otpController = require('../contorllers/otp-controller');

router.get('/',otpController.getOTP);

router.post('/send-otp',otpController.postOTP);


module.exports = router