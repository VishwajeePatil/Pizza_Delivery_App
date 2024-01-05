const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  getOffer: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = {UserModel};
