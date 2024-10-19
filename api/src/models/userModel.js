import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  'name': {
    'required': true,
    'type': mongoose.Schema.Types.String
  },
  'email': {
    'required': true,
    'type': mongoose.Schema.Types.String,
    'unique': true,
    'index': true,
  },
  'location': {
    'type': mongoose.Schema.Types.String
  },
  'password': {
    'type': mongoose.Schema.Types.String
  },
  'isOwner': mongoose.Schema.Types.Boolean,
  'googleId': mongoose.Schema.Types.String

})

const User = new mongoose.model('User', userSchema);

export default User;