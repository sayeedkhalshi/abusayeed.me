const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 32,
    trim: true,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    validate: [validator.isEmail, 'Email is not valid'],
  },
  phone: String,
  job: {
    type: String,
    trim: true,
    required: [true, 'Please write description of your projects'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Contact = mongoose.model('Contact', contactSchema);
