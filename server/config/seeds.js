const db = require('./connection');
const { User, BlogPost } = require('../models');

db.once('open', async () => {
  await User.insertMany([
    {
      name: 'testing',
      email: 'testing@test.com',
      password: 'testing123',
      city: 'Chicago',
      state: 'IL',
    },
    {
      name: 'Charlie Pace',
      email: 'drive@shaft.com',
      password: 'youalleverybody',
      city: 'Austin',
      state: 'TX',
    }
  ])
})