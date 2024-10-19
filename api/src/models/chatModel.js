import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  'message': {
    'required': true,
    'type': mongoose.Schema.Types.String,
  },
  'senderId': {
    'required': true,
    'type': mongoose.Schema.Types.String
  },

  'roomId': {
    'required': true,
    'type': mongoose.Schema.Types.String
  },

  'createdAt': {
    'required': true,
    'type': mongoose.Schema.Types.Date,
    'default': Date.now
  },

  'updatedAt': {
    'required': true,
    'type': mongoose.Schema.Types.Date,
    'default': Date.now
  }
});

export const Chat = mongoose.model('Chat', chatSchema);