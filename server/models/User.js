const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const BlogPost = require('./BlogPost');
const Comments = require('./Comments');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    required: 'Password is Required',
    validate: [({ length }) => length >= 5, "Password should be longer."]
  },
  confirmpassword: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  posts: [BlogPost.schema],
  comments: [Comments.schema]
});

//SAVE USER SCHEMA AND HASH / SALT PASSWORD 
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isNew || this.isModified('confirmpassword')) {
    const saltRounds = 10;
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;