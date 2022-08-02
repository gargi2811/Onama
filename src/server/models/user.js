const mongoose = require('mongoose');
const crypto = require('crypto');
//const uuidv1 = require('uuid/v1');
const {v4: uuidv4} = require('uuid');
uuidv4();

const userSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   maxlength: 32,
    //   trim: true,
    // },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  {timestamps: true},
);

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.password;
  },
  securePassword: function (plainpassword) {
    if (!plainpassword) return '';

    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
};

module.exports = mongoose.model('User', userSchema);
