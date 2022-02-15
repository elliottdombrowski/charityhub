const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    max: 500
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment_author: {
      type: String,
      max: 255
    }
  }]
});

const BlogPost = mongoose.model('BlogPost', postSchema);

module.exports = BlogPost;