const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const UautoIncrementModelID = require('./Utils/Ucounterschema');
const userSchema = new mongoose.Schema({
  local: {
    Name:String,
    email: String,
    password: String
  },
  lvid : { type: Number, default:1},
  Role: {type:String,default:'Player'},
  Players: [{Name:String,PlayerID:Number}],
  UObjectid: { type: Number, unique: true, min: 1},
  createdAt: { type: Date, default: Date.now },
  facebook: {
    id: String,
    token: String,
    email: String,
    password: String
  },
  twitter: {
    id: String,
    token: String,
    email: String,
    password: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    password: String
  }
});
//AutoIncrement ObjectID
userSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  UautoIncrementModelID('activities', this, next);
});
// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for user and expose it to our app
module.exports = mongoose.model('User', userSchema);
