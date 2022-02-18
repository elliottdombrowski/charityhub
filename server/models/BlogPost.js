const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User');
const Comments = require('./Comments');

const postSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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