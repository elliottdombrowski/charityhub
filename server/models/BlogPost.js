const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const Comments = require('./Comments');

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
  comments: [Comments.schema]
});

const BlogPost = mongoose.model('BlogPost', postSchema);

module.exports = BlogPost;