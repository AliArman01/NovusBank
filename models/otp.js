const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const otpSchema = new Schema({
    phoneNo:{
    type:String,
    required: true
  },
  message:{
    type:String,
  }
 
});
module.exports = mongoose.model('OTP', otpSchema);

