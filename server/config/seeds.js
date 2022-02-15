const db = require('./connection');
const { User, BlogPost } = require('../models');

db.once('open', async () => {
  await BlogPost.insertMany([
    {
      author: 'Charlie Pace',
      title: 'Testing One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
    {
      author: 'John Locke',
      title: 'Testing Two',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
    {
      author: 'Hugo Reyes',
      title: 'Testing Three',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
  ]);

  console.log('seeded posts');
  process.exit();
})