const Sms = require('../models/sms')

const twilio = require('twilio');


const Nexmo = require('nexmo');

const accountSid = 'AC0f95118b254ed5b9e56f36466964ce1e';
const authToken = 'f791e936f53659296030e56cc85d1e5a';
const twilioClient = twilio(accountSid, authToken);


const generateRandomSixDigitsNumber = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

exports.getMessege = (req, res, next) => {
    res.render('sms-page');
}

exports.postMessege = async (req, res, next) => {
    try{
    // const recipientPhoneNumber = req.body.phoneNumber;
    // const randomNumber = generateRandomSixDigitsNumber();
    // console.log("hii",recipientPhoneNumber)
    // const message = `Hello from Arman ! Your verification code is: ${randomNumber}`;
    // console.log("messege", message)
    // const response = await twilioClient.messages.create({
    //     from: +13602275105,
    //     to: recipientPhoneNumber,
    //     body: message,
    // });
    // return res.json({ message: `Message sent with id: ${response.sid}` });  
        // client.messages
        // .create({ body: "Hello from Twilio",
        // from: +13602275105, 
        // to: +917319977276
        // })
        // .then(message => console.log(message.sid));


        const nexmo = new Nexmo({
          apiKey: 'a3c30cd3',
          apiSecret: 'cMq6CR5R0AtexPrM'
        });
        const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
        const mobileNumber = '+917319977276'; // Replace with the actual mobile number
        console.log("your otp is here",otp)
        nexmo.message.sendSms(
          '+918090562652', // Replace with your virtual number
          mobileNumber,
          `Hello Sams This is Your OTP  ${otp}`,
          { type: 'unicode' },
          (err, responseData) => {
            if (err) {
              console.log(err);
            } else {
              console.dir(responseData);
            }
          }
        );     

  }
  catch (error) {
    const status = error.statusCode || 500;
    res.status(status).json({ error: error.data })
  }
}


exports.PostVerify = async (req, res) => {
    const recipientPhoneNumber = req.body.phoneNumber;
    const smsCodeReceived = req.body.smsCode;

    const value = await redisClient.get(recipientPhoneNumber);

    if (value === `${smsCodeReceived}`) {
        await redisClient.del(recipientPhoneNumber);

        return res.json({ message: 'This is a valid match!' });
    }

    return res.status(400).json({ message: `The phone number and the SMS code doesn't match.` });
};
