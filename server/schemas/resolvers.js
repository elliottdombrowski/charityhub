const { User, BlogPost, Comments, Charities } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    //FIND SINGLE USER BY ID
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    //FIND CURRENT USER BY ID / SESSION ID
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You must be logged in.');
    },

    //FIND ALL BLOG POSTS
    allPosts: async () => {
      return await BlogPost.find({});
    },

    //FIND ALL BLOG COMMENTS
    allComments: async () => {
      return await Comments.find({});
    },

    //FIND SINGLE BLOG POST BY ID
    singlePost: async (parent, { postId }) => {
      return BlogPost.findOne({ _id: postId });
    },

    //FIND ALL CHARITIES
    allCharities: async () => {
      return await Charities.find({});
    },
  },

  Mutation: {
    //ADD USER, CALL JWT SIGNTOKEN()
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, args };
      } catch (err) {
        console.log(err);
      }
    },

    //LOGIN USER, FIND BY EMAIL
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email.');
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password.');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;