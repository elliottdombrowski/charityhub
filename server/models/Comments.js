const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const commentsSchema = new Schema({
  commentAuthor: {
    type: String
  },
  commentBody: {
    type: String,
    required: true,
    max: 255
  },
  commentCreatedAt: {
    type: Date,
    default: Date.now
  }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;