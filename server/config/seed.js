const db = require('./connection');
const { User, BlogPost, Charities } = require('../models');

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

  await Charities.insertMany([
    {
      charityName: 'Charity One',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Two',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Three',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Four',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Five',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Six',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Seven',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
    {
      charityName: 'Charity Eight',
      charityDescription: 'Lorem ipsum dolor sit amet',
    },
  ]);

  console.log('seeded posts');
  console.log('seeded charities');
  process.exit();
});