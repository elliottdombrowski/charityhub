const mongoose = require('mongoose');
const { Schema } = mongoose;

const charitySchema = new Schema({
  charityName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  charityDescription: {
    type: String
  },
  charityImg: {
    type: String
  },
  charityUrl: {
    type: String
  },
  charityEmail: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  charityAddress: {
    type: String,
    unique: true
  }
});

const Charities = mongoose.model('Charities', charitySchema);

module.exports = Charities;