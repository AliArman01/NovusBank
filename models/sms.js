const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const smsSchema = new Schema({
    phoneNo:{
    type:String,
    required: true
  },
  message:{
    type:String,
  }
 
});
module.exports = mongoose.model('Sms', smsSchema);

