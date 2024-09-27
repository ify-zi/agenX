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
  'dateListed': mongoose.Schema.Types.Date
})

const USER = new mongoose.model('USER', userSchema);

export default USER;