const router = require('express').Router();

const userController = require('../contorllers/sms-controller');

router.get('/',userController.getMessege);
router.post('/sms',userController.postMessege);

router.post('/verify-code',userController.PostVerify)

module.exports = router