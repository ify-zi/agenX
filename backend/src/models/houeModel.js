import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
  'location': {
    'required': true,
    'type': mongoose.Schema.Types.String,
    'index': true
  },

  'owner': {
    'required': true,
    'type': mongoose.Schema.Types.UUID,
  },

  'price': {
    'required': true,
    'type': mongoose.Schema.Types.Number
  },

  'amenities': {
    'type': mongoose.Schema.Types.Array
  },

  'dimension': {
    'type': mongoose.Schema.Types.Object
  },

  'dateListed': mongoose.Schema.Types.Date,
})