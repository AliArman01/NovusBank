const Nexmo = require('nexmo');
const { validationResult } = require('express-validator')
exports.getOTP = (req, res, next) => {
  res.render('otp-page');
}

exports.postOTP = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new Error('Validation Failed')
      err.statusCode = 422
      err.data = errors.array();
      throw err;
    }
    const Mobileno = req.body.phoneNumber
    const nexmo = new Nexmo({
      apiKey: '1b53634a',
      apiSecret: 'OBo3WSPd0DxqvllP',
    });
    const from = '+919737744792';
    const to = Mobileno;
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    nexmo.message.sendSms(from, to,
      `Here is Your OTP for Verification by Anas ${otp}`,
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(responseData);
        }
      });
    res.send('otp send successfully')
  }
  catch (error) {
    const status = error.statusCode || 500;
    res.status(status).json({ error: error.data })
  }
}




