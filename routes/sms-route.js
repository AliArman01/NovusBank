const router = require('express').Router();

const userController = require('../contorllers/sms-controller');

router.get('/',userController.getMessege);

router.post('/send-otp',userController.postMessege);


module.exports = router