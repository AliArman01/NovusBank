const Nexmo = require('nexmo');

exports.getMessege = (req, res, next) => {
    res.render('sms-page');
}

exports.postMessege = async (req, res, next) => {
    try{   
       const Mobileno = req.body.phoneNumber
       console.log("Mobile no of reciever",Mobileno)
        const nexmo = new Nexmo({
          apiKey: '1b53634a',
          apiSecret: 'OBo3WSPd0DxqvllP',
        });
        const from = '+919265216270';
        const to = Mobileno;
        const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
        console.log("your Otp is",otp);
        nexmo.message.sendSms(from, to, `Here is Your OTP for Verification by Arman Ali ${otp}`, (err, responseData) => {
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




