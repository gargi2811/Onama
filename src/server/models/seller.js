const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const sellerSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, ' A seller must have a role'],
    enum: {
      values: ['seller', 'buyer', 'admin'],
      message: 'Role is either: "seller", "buyer" or "admin" ',
    },
  },

  type: {
    type: String,
    required: [true, 'A seller must have a type'],
    enum: {
      values: ['individual', 'organization'],
      message: 'Type is either: "individual or organization"',
    },
  },

  name: {
    type: String,
    required: [true, 'A seller must have a name'],
  },

  address: {
    type: String,
    required: [true, 'A seller must have an address'],
  },

  contact: {
    type: String,
    required: [true, 'A seller must have a contact'],
  },
  waste: {
    type: Array,
    default: [],
  },
});

// sellerSchema.methods.correctPassword = function (
//   candidatePassword,
//   userPassword,
// ) {
//   return bcrypt.compare(candidatePassword, userPassword);
// };

const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;
